import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import MotionSensorData from '../screens/MotionSensorData';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Camera from '../screens/Camera';
import colors from '../constants/colors';
import { StatusBar } from 'react-native';

const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator sceneContainerStyle={{
      backgroundColor: colors.dark
    }} screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconSize = focused ? 32 : 24
        let iconColor = focused ? colors.blue : colors.gray

        switch (route.name) {
          case 'Camera':
            return <Entypo name="camera" size={iconSize} color={iconColor} />
          case 'Settings':
            return <Ionicons name="settings" size={iconSize} color={iconColor} />
          case 'Motion Sensor':
            return <MaterialCommunityIcons name="motion-sensor" size={iconSize} color={iconColor} />
        }
      },
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: colors.dark,
        borderTopColor: 'transparent',
      },
      headerTitleAlign: 'center',
      headerStyle: {
        backgroundColor: colors.dark,

      },
      headerTitleStyle: {
        color: colors.gray,
      }
    })
    } >
      <Tab.Screen name="Camera" component={Camera} />
      <Tab.Screen name="Motion Sensor" component={MotionSensorData} />
      <Tab.Screen name="Settings" component={Settings} />
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