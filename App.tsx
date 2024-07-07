/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useRef, useState} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {NavigationState} from '@react-navigation/core';

import {navigationRef} from './App/helper/navigation/index';
import AppSplashScreen from './App/screens/Splash/index';
import RootNavigator from './App/navigation/RootNavigator';

function App(): JSX.Element {
  const routeNameRef = useRef<string>();
  const [showSplashScreen, setIsShowSplashScreen] = useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 5000);
  }, []);

  if (showSplashScreen) {
    return <AppSplashScreen />;
  }

  //@ts-ignore
  const getActiveRoute = (state: NavigationState) => {
    const route = state.routes[state.index];

    if (route.state) {
      return getActiveRoute(route.state as NavigationState);
    }

    return route;
  };

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer
        ref={navigationRef}
        onReady={() => {
          routeNameRef.current =
            navigationRef?.current?.getCurrentRoute()?.name;
        }}
        onStateChange={state => {
          const {name: currentRouteName} = getActiveRoute(
            state as NavigationState,
          );
          routeNameRef.current = currentRouteName;
        }}>
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
