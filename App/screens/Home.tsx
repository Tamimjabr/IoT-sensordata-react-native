import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, Button, ScrollView, RefreshControl } from 'react-native'
import useFetch, { ResponseType } from '../hooks/useFetch'

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: screenHeight * 0.5,
  },
})


const Home = () => {
  const { data, getImage } = useFetch('http://192.168.0.14/cam-hi.jpg', ResponseType.BLOB)
  const [refreshing, setRefreshing] = React.useState(false)

  const onRefresh = async () => {
    await getImage()
  }


  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={refreshing}
        onRefresh={onRefresh}
      />
    } >
      <Text>Home</Text>
      {data && <Image source={{ uri: data }} style={styles.img} resizeMode='contain' />}
      <Button title='Refresh' onPress={onRefresh} />
    </ScrollView>
  )
}

export default Home