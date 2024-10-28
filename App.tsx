import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {Fragment} from 'react';
import Navigation from './src/navigation/Navigation';
import {CartProvider} from './src/context/cartContext';

const App: React.FC = () => {
  return (
    <Fragment>
      <CartProvider>
        <StatusBar
          barStyle="light-content" // Choose between 'light-content' or 'dark-content'
          backgroundColor="#ef8189"
          translucent={false} // Set to true if you want a translucent effect
        />
        <SafeAreaView style={{flex: 1, backgroundColor: '#FFFFFF'}}>
          <Navigation />
        </SafeAreaView>
      </CartProvider>
    </Fragment>
  );
};

export default App;
