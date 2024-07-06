import React, {ReactElement} from 'react';

import {
  createNativeStackNavigator,
} from '@react-navigation/native-stack';

const Root = createNativeStackNavigator();

function RootNavigator(): ReactElement {
  const defaultHeaderOptions = {};

  return (
    <Root.Navigator
      screenOptions={{
        ...defaultHeaderOptions,
      }}
      initialRouteName="HomeScreen">
      <Root.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        getComponent={() => require('../screens/Home').default}
      />
      <Root.Screen
        options={{title: 'Detail Screen'}}
        name="DetailScreen"
        getComponent={() => require('../screens/Detail').default}
      />
    </Root.Navigator>
  );
}

export default RootNavigator;
