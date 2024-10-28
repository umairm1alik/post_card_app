import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Products from '../screens/Products';
import Cart from '../screens/Cart';
import {RootStackParamList} from '../types/rootStack';

const Stack = createStackNavigator<RootStackParamList>();

const Navigation: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Products"
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Products"
          component={Products}
          options={{title: 'Products'}}
        />
        <Stack.Screen name="Cart" component={Cart} options={{title: 'Cart'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
