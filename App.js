
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './auth/Login'
import Register from './auth/Register'
import ForgetPassword from './auth/ForgetPassword'
import Tabs from './components/Tabs';
// import splashScreen from './components/splashScreen';
import Shop from './components/Shop';
import Protien from './Products/protien';
import Creatine from './Products/creatine';
import lArginine from './Products/lArginine';
import Glutamine from './Products/glutamine';
import Omega3 from './Products/Omega3';
import Carb from './Products/Carb';
import Vitamins from './Products/Vitamins';
import FitEquipment from './Products/fitEquipment';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
<NavigationContainer>
      <Stack.Navigator>
      {/* <Stack.Screen
          name="splashScreen"
          component={splashScreen}
          options={{ headerShown: false }}
        /> */}
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Shop"
          component={Shop}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Protien"
          component={Protien}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Creatine"
          component={Creatine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="lArginine"
          component={lArginine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Glutamine"
          component={Glutamine}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Omega3"
          component={Omega3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Carb"
          component={Carb}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Vitamins"
          component={Vitamins}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="FitEquipment"
          component={FitEquipment}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

