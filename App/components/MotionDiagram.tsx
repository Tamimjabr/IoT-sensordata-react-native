import React from 'react'
import colors from '../constants/colors'
import { BarChart, Grid } from 'react-native-svg-charts'
import { mergeSensorDataByDay, SensorDataByDay } from '../utils/merge-sensordata-by-day'

const fill = colors.blue

const MotionDiagram = ({ data }: any) => {
  const sensorData = mergeSensorDataByDay(data)
  const chartData = sensorData.map((item: SensorDataByDay) => {
    return item.numberOfTimes
  })

  return (
    <BarChart style={{ height: 200, width: '98%', alignSelf: 'center', backgroundColor: colors.white, borderRadius: 7 }}
      data={chartData}
      svg={{ fill }}
      contentInset={{ top: 30, bottom: 30 }}>
      <Grid />
    </BarChart>
  )
}

export default MotionDiagram