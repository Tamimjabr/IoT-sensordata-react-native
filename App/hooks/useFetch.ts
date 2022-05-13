import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';


const useFetch = (url: string) => {
  const [data, setData] = React.useState<any>();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const getData = React.useCallback(() => {
    setLoading(true)
    setData(null);
    setError(null);

    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
      } catch (error: any) {
        Alert.alert('Error', `Something went wrong. Please try again later`)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])


  React.useEffect(() => {
    const fetchData = async () => {
      await getData()
    }

    fetchData()
  }, [getData])

  return { data, loading, error, getData }
}

export default useFetch;