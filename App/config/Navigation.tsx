import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import MotionSensorData from '../screens/MotionSensorData';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Camera from '../screens/Camera';
import colors from '../constants/colors';
import { StatusBar, StyleSheet } from 'react-native';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  focusedIcon: { backgroundColor: colors.white, bottom: 8, padding: 10, borderRadius: 20 }
})

const MyTabs = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor: colors.dark
    }} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconSize = focused ? 28 : 24
        let iconColor = focused ? colors.blue : colors.dark

        switch (route.name) {
          case 'Camera':
            return <Entypo name="camera" size={iconSize} color={iconColor} style={focused && styles.focusedIcon} />
          case 'Settings':
            return <Ionicons name="settings" size={iconSize} color={iconColor} style={focused && styles.focusedIcon} />
          case 'Motion Sensor':
            return <MaterialCommunityIcons name="motion-sensor" size={iconSize} color={iconColor} style={focused && styles.focusedIcon} />
        }
      },
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.dark,
        borderTopColor: 'transparent',
      },
      tabBarActiveBackgroundColor: colors.white,
      tabBarInactiveBackgroundColor: colors.gray,
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: colors.dark,
      },
      headerTitleStyle: {
        color: colors.white,
      }
    })
    } >
      <Tab.Screen name="Camera" component={Camera} options={({ route }) => ({
        tabBarItemStyle: {
          borderTopLeftRadius: 20,
        }
      })} />
      <Tab.Screen name="Motion Sensor" component={MotionSensorData} />
      <Tab.Screen name="Settings" component={Settings} options={{
        tabBarItemStyle: {
          borderTopRightRadius: 20,
        }
      }} />
    </Tab.Navigator >
  );
}

export default () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.dark} barStyle='light-content' />
      <MyTabs />
    </NavigationContainer>
  )
}