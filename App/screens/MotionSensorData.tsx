import React from 'react'
import { FlatList, RefreshControl, ScrollView, StyleSheet, Text, View } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem'
import colors from '../constants/colors'
import useFetch from '../hooks/useFetch'
import MotionDiagram from '../components/MotionDiagram'

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
  const { data, getData, loading } = useFetch('http://192.168.0.7:5051/api/v1/sensors')

  const onRefresh = async () => {
    await getData()
  }

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
          <MotionDiagram />
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