import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import HomeScreen from "./src/screen/HomeScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen";
import SquareScreen from "./src/screen/SquareScreen";

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Color:ColorScreen,
    Square: SquareScreen,
    Counter: CounterScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);



export default createAppContainer(navigator);
