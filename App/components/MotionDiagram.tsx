import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Chart, Line, Area, HorizontalAxis, VerticalAxis } from 'react-native-responsive-linechart'
import colors from '../constants/colors'



const MotionDiagram = () => {
  return (
    <Chart
      style={{ height: 300, width: '98%', alignSelf: 'center', backgroundColor: colors.white, borderRadius: 7 }}
      data={[
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 5, y: 8 },
        { x: 6, y: 12 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
      ]}
      padding={{ left: 40, bottom: 20, right: 5, top: 20, }}
      xDomain={{ min: -2, max: 10 }}
      yDomain={{ min: -4, max: 20 }}
    >
      <VerticalAxis
        tickCount={5}
        theme={{ labels: { formatter: (v) => v.toFixed(2) } }}
      />
      <HorizontalAxis tickCount={3} />
      <Area theme={{ gradient: { from: { color: colors.blue }, to: { color: colors.gray, opacity: 0.4 } } }} />
      <Line theme={{ stroke: { color: colors.blue, width: 6 } }} />
    </Chart>
  )
}

export default MotionDiagram