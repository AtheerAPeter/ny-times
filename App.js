import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './app/screens/Home';
import {Platform, StatusBar} from 'react-native';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query';
import Details from './app/screens/Details';
const queryClient = new QueryClient();
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <StatusBar
        barStyle={Platform.select({
          ios: 'dark-content',
          android: 'light-content',
        })}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            animation: 'slide_from_right',
          }}
          initialRouteName="Home">
          <Stack.Screen
            options={{headerShown: false}}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="Details"
            component={Details}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
