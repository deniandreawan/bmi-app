import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { colors } from "../constants";
import { ResultScreen } from "../screens";
import { RootStackParamList } from "../types";
import { TabBar } from "./TabBar";

const Stack = createStackNavigator<RootStackParamList>();

const screenOptions = {
  headerShown: false,
  cardStyle: { backgroundColor: "transparent" },
  ...TransitionPresets.ModalPresentationIOS,
};

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="Root" component={TabBar} />
      <Stack.Screen name="Result" component={ResultScreen} />
    </Stack.Navigator>
  );
}

export function Navigation() {
  return (
    <NavigationContainer
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: colors.primaryDark,
        },
      }}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}
