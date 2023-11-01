import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import {PerksProvider} from "./context";

import Scanner from './screens/Scanner';
import Home from './screens/Home';
import Vendors from './screens/Vendors';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import Welcome from './screens/Welcome';
import Rewards from './screens/Rewards';
import SVRewards from './screens/SVRewards';
import Profile from './screens/Profile';
import EditProfile from './screens/EditProfile';
import SpecificVendor from './screens/SpecificVendor'
import AllRestaurants from './screens/AllRestaurants';
import RedeemedRewards from "./screens/RedeemedRewards";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const SpecificVendorStack = createStackNavigator(); // New Stack Navigator for SpecificVendor

function SpecificVendorComponent() {
  return (
    <SpecificVendorStack.Navigator>
      <SpecificVendorStack.Screen
        name="SpecificVendor"
        component={SpecificVendor}
        options={{
          headerTitle: '',
          headerTransparent: true,
        }}
      />
      <SpecificVendorStack.Screen
        name="SVRewards"
        component={SVRewards}
        options={{
          headerTitle: '',
          headerTransparent: true,
          headerTintColor: 'white',
        }}
      />
    </SpecificVendorStack.Navigator>
  );
}

function MainScreens() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
            <Icon name={"home"} color={color} size={35} />
          )
          },
        }}
      />
      <Tab.Screen
        name="Rewards"
        component={Rewards}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Icon name={"gift"} color={color} size={35} />
              )
            },
        }}
      />
      <Tab.Screen
        name="Scanner"
        component={Scanner}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
            <Icon name={"qrcode"} color={color} size={35} />
          )
          },
        }}
      />
      <Tab.Screen
        name="Vendors"
        component={Vendors}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Icon name={"cutlery"} color={color} size={25} />
              )
            },
          }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => {
            return (
              <Icon name={"user"} color={color} size={35} />
              )
            },
          }}
      />
    </Tab.Navigator>
  );
}

export default function MainApp() {
  const userIsLoggedIn = false; // Replace with your authentication logic

  return (
    <NavigationContainer>
        <PerksProvider>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="MainScreens"
          component={MainScreens}
          options={{ headerShown: false }}
        />
        {/* Add a separate route to SpecificVendor using SpecificVendorComponent */}
        <Stack.Screen
          name="SpecificVendorStack"
          component={SpecificVendorComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RedeemedRewards"
          component={RedeemedRewards}
          options={{
            headerTitle: '',
            headerTransparent: true,
          }}
        />
        <Stack.Screen
          name="AllRestaurants"
          component={AllRestaurants}
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerTitle: '',
            headerTransparent: true,
            // headerTintColor: 'white',
          }}
        />
      </Stack.Navigator>
        </PerksProvider>
    </NavigationContainer>
  );
}
