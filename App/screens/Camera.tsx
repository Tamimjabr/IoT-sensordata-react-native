import React from 'react'
import { View, Image, StyleSheet, Dimensions, Button, ScrollView, RefreshControl } from 'react-native'
import { GlobalStateContext } from '../global-state/GlobalState'
import useFetch, { ResponseType } from '../hooks/useFetch'


const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
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
      {loading && <View style={[styles.img, { backgroundColor: '#D1D1D1' }]}></View>}
      {data && <Image source={{ uri: data }} style={styles.img} resizeMode='contain' />}
      <Button title='Refresh' onPress={onRefresh} />
    </ScrollView>
  )
}

export default Camera