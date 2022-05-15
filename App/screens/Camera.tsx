import React from 'react'
import { View, Image, StyleSheet, Dimensions, ScrollView, RefreshControl, Text } from 'react-native'
import { GlobalStateContext } from '../global-state/GlobalState'
import { FontAwesome } from '@expo/vector-icons';
import useFetchBlob from '../hooks/useFetchBlob'
import Button from '../components/Button'
import colors from '../constants/colors'

const screenHeight = Dimensions.get('window').height

const styles = StyleSheet.create({
  text: {
    backgroundColor: colors.white,
    color: colors.blue,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    borderRadius: 10,
    padding: 10,
    width: '50%',
    alignSelf: 'center'
  },
  img: {
    width: '100%',
    height: screenHeight * 0.5,
    justifyContent: 'center',
  }, buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  }
})

const Camera = () => {
  // GLOBAL STATE
  const { imgResolution } = React.useContext(GlobalStateContext)
  const { data, getImage, loading } = useFetchBlob(`http://192.168.0.14/cam-${imgResolution}.jpg`)

  console.log('imgResolution', imgResolution)
  const onRefresh = async () => {
    await getImage(`http://192.168.0.14/cam-${imgResolution}.jpg`)
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
      <View style={styles.buttonContainer}>
        <Button text='Refresh' onPress={onRefresh} buttonIcon={(<FontAwesome name="refresh" size={24} color={colors.white} />)} />
        <Button text='Upload' onPress={onRefresh} buttonIcon={(<FontAwesome name="cloud-upload" size={24} color={colors.white} />)} />
      </View>
    </ScrollView>
  )
}

export default Camera