import React from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem'
import colors from '../constants/colors'
import useFetch from '../hooks/useFetch'
import MotionDiagram from '../components/MotionDiagram'
import moment from 'moment'
import { CustomMotion } from '../types/motion'
import { sortSensorDataLastFirst } from '../utils/merge-sensordata-by-day'
import { momentDateFormat } from '../constants/moment-format'

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
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignSelf: 'center'
  },
  subText: {
    color: colors.darkGray,
    fontSize: 12,
    fontWeight: 'normal',
  }

})

const MotionSensorData = () => {
  const { data, getData, loading } = useFetch('https://iot-sensordata.herokuapp.com/api/v1/sensors')
  const [customData, setCustomData] = React.useState<any>([])


  const onRefresh = async () => {
    await getData()
  }


  React.useEffect(() => {
    if (data) {
      sortSensorDataLastFirst(data.data)
      let newData: CustomMotion[] = Array.from(data.data).map((item: any) => {
        return {
          _time: item._time,
          _value: item._value,
          sensor_id: item.sensor_id,
          date: moment(item._time).format(momentDateFormat)
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
          <Text style={styles.text}>Motions By Day{"\n"}
            <Text style={styles.subText}>Last 7 Days</Text>
          </Text>
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
                <RowItem title={`Motion ${moment(item._time).local().format('DD-MM-YYYY hh:mm:ss')}`} onPress={() => undefined} />
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