import React from 'react'
import { FlatList } from 'react-native'
import { GlobalStateContext } from '../global-state/GlobalState'
import { Resolution } from '../types/img-resolutions'
import { RowDivider, RowItem } from './RowItem'


const ImageResolutionList = ({ closeOnChangedQuality }: any) => {
  // GLOBAL STATE
  const { setImgResolution } = React.useContext(GlobalStateContext)

  const resolutions = [
    {
      title: 'High',
      onPress: () => {
        setImgResolution(Resolution.HIGH)
        closeOnChangedQuality()
      }
    }, {
      title: 'Medium',
      onPress: () => {
        setImgResolution(Resolution.MEDIUM)
        closeOnChangedQuality()
      }
    },
    {
      title: 'Low',
      onPress: () => {
        setImgResolution(Resolution.LOW)
        closeOnChangedQuality()
      }
    }
  ]

  return (
    <FlatList
      data={resolutions}
      renderItem={({ item }) => (
        <RowItem title={item.title} onPress={item.onPress} textStyle={{
          color: 'black',
          fontWeight: 'bold',
        }} />
      )
      }
      keyExtractor={(item) => item.title}
      ItemSeparatorComponent={() => <RowDivider />}
    />
  )
}

export default ImageResolutionList