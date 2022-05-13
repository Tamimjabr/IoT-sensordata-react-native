import React from 'react'
import { View, Image, StyleSheet, Dimensions, Button, ScrollView, RefreshControl, Text } from 'react-native'
import colors from '../constants/colors'
import { GlobalStateContext } from '../global-state/GlobalState'
import useFetch, { ResponseType } from '../hooks/useFetch'


const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    marginVertical: 5,
  },
  img: {
    width: '100%',
    height: screenHeight * 0.5,
    justifyContent: 'center',
  },
})

const Camera = () => {
  // GLOBAL STATE
  const { imgResolution } = React.useContext(GlobalStateContext)
  const { data, getImage, loading } = useFetch(`http://192.168.0.14/cam-${imgResolution}.jpg`, ResponseType.BLOB)

  console.log('imgResolution', imgResolution)
  const onRefresh = async () => {
    await getImage()
  }

  return (
    <ScrollView refreshControl={
      <RefreshControl
        refreshing={loading}
        onRefresh={onRefresh}
      />
    } >
      <Text style={styles.text}>Image resolution: {imgResolution}</Text>
      {loading && <View style={[styles.img, { backgroundColor: '#D1D1D1' }]}></View>}
      {data && <Image source={{ uri: data }} style={styles.img} resizeMode='contain' />}
      <Button title='Refresh' onPress={onRefresh} />
    </ScrollView>
  )
}

export default Camera