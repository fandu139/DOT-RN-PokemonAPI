import React, {ReactElement} from 'react';
import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import HomeScreen from '../screens/Home';
import DetailScreen from '../screens/Detail';
import Colors from '../theme/colors';

const Root = createNativeStackNavigator();

function RootNavigator(): ReactElement {
  const defaultHeaderOptions = {
    headerStyle: {
      backgroundColor: Colors.GREEN_47,
    },
    headerTintColor: Colors.WHITE,
  };

  return (
    <Root.Navigator
      screenOptions={{
        ...defaultHeaderOptions,
      }}
      initialRouteName="HomeScreen">
      <Root.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <Root.Screen
        options={{title: 'Detail Screen'}}
        name="DetailScreen"
        component={DetailScreen}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
