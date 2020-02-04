import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Pages/HomeScreen';
import SplashScreen from './Pages/SplashScreen';
import WelcomeScreen from './Pages/WelcomeScreen';

const MainNavigator = createStackNavigator(
  {
    Home: {screen: HomeScreen, navigationOptions: {headerShown: false}},
    Splash: {screen: SplashScreen, navigationOptions: {headerShown: false}},
    Welcome: {screen: WelcomeScreen, navigationOptions: {headerShown: false}},
  },
  {
    initialRouteName: 'Splash',
  },
);

const App = createAppContainer(MainNavigator);

export default App;
