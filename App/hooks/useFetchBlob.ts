import React from 'react';
import { Alert } from 'react-native';


const useFetchBlob = (url: string) => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getImage = React.useCallback(() => {
    setLoading(true)
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        // source:https://stackoverflow.com/questions/65216756/react-native-android-create-url-createobjecturlblob
        let blob = await response.blob()
        blob = new Blob([blob], {
          type: "text/vtt; charset=utf-8"
        });

        const fileReaderInstance = new FileReader();
        fileReaderInstance.readAsDataURL(blob);
        fileReaderInstance.onload = () => {
          const base64data = fileReaderInstance.result;
          setData(base64data)
        }
      } catch (error: any) {
        Alert.alert('Error', `${error.message}. Unable to connect to camera`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  React.useEffect(() => {
    const fetchData = async () => {
      await getImage()
    }

    fetchData()
  }, [getImage])

  return { data, loading, error, getImage }
}

export default useFetchBlob;