import React from 'react'
import { Text, View, Image, StyleSheet, Dimensions, Button } from 'react-native'
import useFetch, { ResponseType } from '../hooks/useFetch'

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: screenHeight * 0.5,
  },
})


const Home = () => {
  const { data } = useFetch('http://192.168.0.14/cam-hi.jpg', ResponseType.BLOB)

  return (
    <View>
      <Text>Home</Text>
      {data && <Image source={{ uri: data }} style={styles.img} resizeMode='contain' />}
      <Button title='Go to Camera' onPress={() => { console.log('pressed') }} />
    </View>
  )
}

export default Home