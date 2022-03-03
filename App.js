import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { StyleSheet } from "react-native";


import HomeScreen from "./src/screen/HomeScreen";
import CounterScreen from "./src/screen/CounterScreen";
import ColorScreen from "./src/screen/ColorScreen";
import SquareScreen from "./src/screen/SquareScreen";
import SquareScreenBkup from "./src/screen/SquareScreenBkup";
import LoginScreen from "./src/screen/LoginScreen/LoginScreen";

const navigator = createStackNavigator(
  {
    Home:HomeScreen,
    Color:ColorScreen,
    Square: SquareScreen,
    Counter: CounterScreen,
    SquareBkup: SquareScreenBkup,
    Login: LoginScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

const styles = StyleSheet.create({});

export default createAppContainer(navigator);
