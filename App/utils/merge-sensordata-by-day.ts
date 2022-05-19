import moment from "moment"

export const mergeSensorDataByDay = (data: any[]) => {
  const sensorDataByDate: any[] = []

  for (let i = 0; i < 7; i++) {
    const date = moment().subtract(i, 'days').format('DD-MM')
    sensorDataByDate.push({
      date,
      numberOfTimes: 0
    })
  }

  data.forEach((motion: any) => {
    let alreadyAddedDate = sensorDataByDate.find(item => item.date === motion.date)
    if (alreadyAddedDate) {
      alreadyAddedDate.numberOfTimes++
    }
  })

  return sensorDataByDate.sort((a: any, b: any) => {
    return moment(a.date, 'DD-MM').diff(moment(b.date, 'DD-MM'))
  })
}