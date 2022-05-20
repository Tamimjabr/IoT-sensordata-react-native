import React from 'react'
import colors from '../constants/colors'
import { BarChart, XAxis } from 'react-native-svg-charts'
import { mergeSensorDataByDay, SensorDataByDay } from '../utils/merge-sensordata-by-day'
import { View } from 'react-native'

const fill = colors.blue
const contentInset = { top: 20, bottom: 20 }
const MotionDiagram = ({ data }: any) => {
  const sensorData = mergeSensorDataByDay(data)
  const chartData = sensorData.map((item: SensorDataByDay) => {
    return item.numberOfTimes
  })

  return (
    <View style={{ height: 230, padding: 10 }}>
      <BarChart style={{
        height: 200,
        width: '98%',
        alignSelf: 'center',
        backgroundColor: colors.white, borderRadius: 7
      }}
        data={chartData}
        svg={{ fill }}
        contentInset={contentInset}>
      </BarChart>
      <XAxis
        style={{ marginHorizontal: 20 }}
        data={chartData}
        formatLabel={(value, index) => {
          return sensorData[index].date
        }}
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 10, fill: colors.darkGray }}
      />
    </View >
  )
}

export default MotionDiagram