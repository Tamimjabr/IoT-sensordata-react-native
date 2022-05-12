import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Settings from '../screens/Settings';
import MotionSensorData from '../screens/MotionSensorData';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Camera from '../screens/Camera';

const Tab = createBottomTabNavigator();


const MyTabs = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconSize = focused ? 32 : 24

        switch (route.name) {
          case 'Camera':
            return <Entypo name="camera" size={iconSize} color="black" />
          case 'Settings':
            return <Ionicons name="settings" size={iconSize} color="black" />
          case 'Motion Sensor':
            return <MaterialCommunityIcons name="motion-sensor" size={iconSize} color="black" />
        }
      },
      tabBarShowLabel: false,
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
      <MyTabs />
    </NavigationContainer>
  )
}