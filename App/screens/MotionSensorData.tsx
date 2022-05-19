import React from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem'
import colors from '../constants/colors'
import useFetch from '../hooks/useFetch'
import MotionDiagram from '../components/MotionDiagram'
import moment from 'moment'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    backgroundColor: colors.white,
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 5,
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignSelf: 'center'
  }
})

const MotionSensorData = () => {
  // todo fetch from own server
  const { data, getData, loading } = useFetch('https://iot-sensordata.herokuapp.com/api/v1/sensors')
  const [customData, setCustomData] = React.useState<any>([])


  const onRefresh = async () => {
    await getData()
  }


  React.useEffect(() => {
    if (data) {
      const newData = Array.from(data.data).map((item: any) => {
        return {
          _time: item._time,
          _value: item._value,
          sensor_id: item.sensor_id,
          date: moment(item._time).format('DD-MM')
        }
      })

      setCustomData(newData)
    }
  }, [data])

  return (
    <>
      {data && data.data.length === 0 ? <ScrollView
        refreshControl={<RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
        />}>
        <Text style={styles.text}>No data</Text>
      </ScrollView> :
        <View style={styles.container}>
          <Text style={styles.text}>Motions Last 7 Days</Text>
          {(data && data.data) && (<MotionDiagram data={customData} />)}
          <Text style={styles.text}> History</Text>
          <View>
            <FlatList
              refreshControl={<RefreshControl
                refreshing={loading}
                onRefresh={onRefresh}
              />}
              data={data ? data.data : []}
              renderItem={({ item }) => (
                <RowItem title={`Motion ${item._time}`} onPress={() => undefined} />
              )
              }
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={() => <RowDivider />}
            />
          </View>
        </View>
      }
    </>
  )
}

export default MotionSensorData