import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from '../_containers/home/HomeScreen';
import DashboardScreen from '../_containers/dashboard/DashboardScreen';

const MainNavigator = createSwitchNavigator({
    Home: { screen: HomeScreen },
    Dashboard: { screen: DashboardScreen }
});

const MainApp = createAppContainer(MainNavigator);

export default MainApp;