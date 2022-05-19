import moment from "moment"
import { momentDateFormat } from "../constants/moment-format"
import { CustomMotion } from "../types/motion"

export type SensorDataByDay = {
  date: string,
  numberOfTimes: number
}

export const mergeSensorDataByDay = (data: CustomMotion[]) => {
  const sensorDataByDate: SensorDataByDay[] = []

  for (let i = 0; i < 7; i++) {
    const date = moment().subtract(i, 'days').format(momentDateFormat)
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
    return moment(a.date, momentDateFormat).diff(moment(b.date, momentDateFormat))
  })
}

export const sortSensorDataLastFirst = (data: CustomMotion[]) => {
  return data.sort((a: CustomMotion, b: CustomMotion) => {
    return moment(b._time).diff(moment(a._time))
  })
}