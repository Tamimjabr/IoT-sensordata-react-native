import moment from "moment"
import { CustomMotion } from "../types/motion"

export type SensorDataByDay = {
  date: string,
  numberOfTimes: number
}

export const mergeSensorDataByDay = (data: CustomMotion[]) => {
  const sensorDataByDate: SensorDataByDay[] = []

  for (let i = 0; i < 7; i++) {
    const date = moment().subtract(i, 'days').format('DD-MM')
    sensorDataByDate.push({
      date,
      numberOfTimes: 0
    })
  }

  data.forEach((motion: CustomMotion) => {
    let alreadyAddedDate = sensorDataByDate.find(item => item.date === motion.date)
    if (alreadyAddedDate) {
      alreadyAddedDate.numberOfTimes++
    }
  })

  return sensorDataByDate.sort((a: SensorDataByDay, b: SensorDataByDay) => {
    return moment(a.date, 'DD-MM').diff(moment(b.date, 'DD-MM'))
  })
}