import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import CountriesScreen from './screens/CountriesScreen';
import CountryScreen from './screens/CountryScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Countries" component={CountriesScreen} />
        <Tab.Screen name="Country" component={CountryScreen} options={{ tabBarButton: () => null, tabBarVisible: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
