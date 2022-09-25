import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import merge from "lodash.merge";
import { RootTabParamList } from "../types";
import {
  HistoryScreen,
  HomeScreen,
  MoreScreen,
  StatisticScreen,
} from "../screens";
import { colors, isAndroid } from "../constants";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

const Tab = createBottomTabNavigator<RootTabParamList>();

const androidTabBarStyle = isAndroid
  ? {
      tabBarStyle: {
        paddingBottom: 5,
        height: 60,
      },
    }
  : undefined;

export function TabBar() {
  const screenOptions = merge(
    {
      headerShown: false,
      tabBarActiveTintColor: colors.secondary,
      tabBarInactiveTintColor: colors.gray,
      tabBarStyle: {
        backgroundColor: colors.primary,
        borderTopColor: colors.primary,
      },
      tabBarLabelStyle: {
        fontFamily: "Poppins_500Medium",
      },
    },
    androidTabBarStyle
  );

  return (
    <Tab.Navigator initialRouteName="Calculator" screenOptions={screenOptions}>
      <Tab.Screen
        name="Calculator"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="calculator" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Statistic"
        component={StatisticScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="trending-up" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="History"
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="history" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="dots-horizontal" color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
