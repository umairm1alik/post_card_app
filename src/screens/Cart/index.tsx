import {View, Text} from 'react-native';
import React from 'react';
import Design from './Design';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../types/rootStack';
import {useCart} from '../../context/cartContext';
interface CartScreenProps {}
const Cart: React.FC<CartScreenProps> = ({}) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const {cart} = useCart();

  const navigateBack = () => {
    navigation.goBack();
  };
  const defaultProps = {navigateBack, cart};
  return <Design {...defaultProps} />;
};

export default Cart;
