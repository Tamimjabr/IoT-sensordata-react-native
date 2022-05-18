import React from 'react'
import { FlatList, Text } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem'
import useFetch from '../hooks/useFetch'





const MotionSensorData = () => {
  // todo fetch from own server
  const { data, getData, loading } = useFetch('http://192.168.0.7:5051/api/v1/sensors')
  console.log('data:', data)

  return (
    <FlatList
      data={data ? data.data : []}
      renderItem={({ item }) => (
        <RowItem title={`Motion ${item._time}`} onPress={() => undefined} />
      )
      }
      keyExtractor={(item, index) => index.toString()}
      ItemSeparatorComponent={() => <RowDivider />}
    />
  )
}

export default MotionSensorData