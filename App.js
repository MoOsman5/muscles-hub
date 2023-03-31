
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './auth/Login'
import Register from './auth/Register'
import ForgetPassword from './auth/ForgetPassword'
import MyTabs from './MyTabs';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ForgetPassword"
          component={ForgetPassword}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

