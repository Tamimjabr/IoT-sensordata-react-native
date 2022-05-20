import React from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';
import ImageResolutionList from '../components/ImageResolutionList';
import SettingModal from '../components/SettingModal';
import CameraIPAddress from '../components/CameraIPAddress';
import About from '../components/About';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center"
  },
});


const Settings = () => {
  const [imageResolutionModalVisible, setImageResolutionModalVisible] = React.useState(false);
  const [cameraIPAddressModalVisible, setCameraIPAddressModalVisible] = React.useState(false);
  const [aboutModalVisible, setAboutModalVisible] = React.useState(false);

  const settings = [{
    title: <RowItem title={'Image Quality'} onPress={() => setImageResolutionModalVisible(true)} rightIcon={<Entypo name="chevron-small-right" size={24} color={colors.white} />} />,
    Modal: <SettingModal
      modalVisible={imageResolutionModalVisible}
      onClose={(modalVisible: boolean) => setImageResolutionModalVisible(modalVisible)}
      content={<ImageResolutionList closeOnChangedQuality={() => setImageResolutionModalVisible(false)} />}
    />
  },
  {
    title: <RowItem title={'Camera IP Address'} onPress={() => setCameraIPAddressModalVisible(true)} rightIcon={<Entypo name="chevron-small-right" size={24} color={colors.white} />} />,
    Modal: <SettingModal
      modalVisible={cameraIPAddressModalVisible}
      onClose={(modalVisible: boolean) => setCameraIPAddressModalVisible(modalVisible)}
      content={<CameraIPAddress />}
    />
  }, {
    title: <RowItem title={'About'} onPress={() => setAboutModalVisible(true)} rightIcon={<Entypo name="chevron-small-right" size={24} color={colors.white} />} />,
    Modal: <SettingModal
      modalVisible={aboutModalVisible}
      onClose={(modalVisible: boolean) => setAboutModalVisible(modalVisible)}
      content={<About />}
    />
  }];

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <>
            {item.title}
            {item.Modal}
          </>
        )
        }
        keyExtractor={(item) => item.title.props.title}
        ItemSeparatorComponent={() => <RowDivider />}
      />
    </SafeAreaView >
  )
}

export default Settings