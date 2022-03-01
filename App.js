import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";


import HomeScreen from "./src/screen/HomeScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen";
import SquareScreen from "./src/screen/SquareScreen";
import SquareScreenBkup from "./src/screen/SquareScreenBkup";

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Color:ColorScreen,
    Square: SquareScreen,
    Counter: CounterScreen,
    SquareBkup: SquareScreenBkup,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);



export default createAppContainer(navigator);
