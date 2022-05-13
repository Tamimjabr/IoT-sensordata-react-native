import React from 'react'
import { Text, View, SafeAreaView, FlatList, StyleSheet, StatusBar } from 'react-native'
import { RowDivider, RowItem } from '../components/RowItem';
import { Entypo } from '@expo/vector-icons';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});

const settings = ['Image Quality', 'About'];

const Settings = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <RowItem title={item} onPress={() => console.log('pressed')} rightIcon={<Entypo name="chevron-small-right" size={24} color={colors.white} />} />
        )}
        keyExtractor={(item) => item}
        ItemSeparatorComponent={() => <RowDivider />}
      />
    </SafeAreaView>
  )
}

export default Settings