import React, {ReactElement} from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import SplashScreen from '../screens/Splash';
import Colors from '../theme/colors';

const Root = createNativeStackNavigator();

function RootNavigator(): ReactElement {
  const defaultHeaderOptions = {
    headerStyle: {
      backgroundColor: Colors.WHITE,
    },
    headerTintColor: Colors.WHITE,
  };

  return (
    <Root.Navigator
      screenOptions={{
        ...defaultHeaderOptions,
      }}
      initialRouteName="SplashScreen">
      <Root.Screen
        options={{headerShown: false}}
        name="SplashScreen"
        component={SplashScreen}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
