import { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';

export enum ResponseType {
  BLOB, JSON
}


const useFetch = (url: string, resType: ResponseType = ResponseType.JSON) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const getImage = useCallback(() => {
    setLoading(true)
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        let obj: any = {}

        if (resType === ResponseType.BLOB) {
          // source:https://stackoverflow.com/questions/65216756/react-native-android-create-url-createobjecturlblob
          let blob = await response.blob()
          blob = new Blob([blob], {
            type: "text/vtt; charset=utf-8"
          });
          const fileReaderInstance = new FileReader();
          fileReaderInstance.readAsDataURL(blob);
          fileReaderInstance.onload = () => {
            const base64data = fileReaderInstance.result;
            obj = base64data
            setData(obj)
          }
        } else {
          obj = await response.json()
          setData(obj)
        }
      } catch (error: any) {
        let message
        if (resType === ResponseType.BLOB) {
          message = `${error.message}. Unable to connect to camera`
        } else {
          message = `Something went wrong. Please try again later`
        }
        Alert.alert('Error', message)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  useEffect(() => {
    const fetchData = async () => {
      await getImage()
    }

    fetchData()
  }, [getImage])

  return { data, loading, error, getImage }
}

export default useFetch;