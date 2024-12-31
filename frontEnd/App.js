import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DrawerActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import Home from './src/components/Home'
import { useFonts } from "expo-font";
import { toastConfig } from "./src/constants/toast";
import Toast from "react-native-toast-message";

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    "Caveat-Bold": require("./assets/fonts/Caveat-Bold.ttf"),
    "Vietnam-Bold": require("./assets/fonts/BeVietnamPro-Bold.ttf"),
    "Vietnam-Regular": require("./assets/fonts/BeVietnamPro-Regular.ttf"),
    "Caveat-Regular": require("./assets/fonts/Caveat-Regular.ttf"),
    "Vietnam-SemiBold": require("./assets/fonts/BeVietnamPro-SemiBold.ttf"),
    "Vietnam-Light": require("./assets/fonts/BeVietnamPro-Light.ttf"),
  });

  if (!fontsLoaded) {
    return undefined;
  } else {
    SplashScreen.hideAsync();
  }

  const Stack = createNativeStackNavigator();

  return (
    
    <>
      <Home></Home>
      <Toast config={toastConfig}/>
    </>
     
 
  );
}

