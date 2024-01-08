import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import SplashScreen from './src/pages/SplashScreen';
import Send from './src/pages/Send';
import Receive from './src/pages/Receive';

const Tab = createNativeStackNavigator()
const BottomTab = createBottomTabNavigator()

function MainApp() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name='Home' component={Home} options={
        {
          tabBarIcon({ focused, color, size}) {
            return (
              <FontAwesomeIcon icon={faHome} color={color} size={size} />
            )
          },
          headerShown: false
        }
      } />
      <BottomTab.Screen name='Transaction' component={Home} options={
        {
          tabBarIcon({ focused, color, size}) {
            return (
              <FontAwesomeIcon icon={faMoneyBill} color={color} size={size} />
            )
          },
          headerShown: false
        }
      } />
    </BottomTab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Splash'>
        <Tab.Screen name='Splash' component={SplashScreen} options={{ headerShown: false }}  />
        <Tab.Screen name='MainApp' component={MainApp} options={{ headerShown: false }} />
        <Tab.Screen name='Send' component={Send} options={{ headerShown: false }} />
        <Tab.Screen name='Receive' component={Receive} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}