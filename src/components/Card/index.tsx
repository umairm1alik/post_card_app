import {View, Text} from 'react-native';
import React from 'react';
import Design from './Design';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Product} from '../../types/types';
import {useCart} from '../../context/cartContext';
interface ProductCardProps {
  product: Product;
  isCart?: boolean;
}
const ProductCard: React.FC<ProductCardProps> = ({product, isCart}) => {
  const {handleBuy, handleRemove} = useCart();
  //   const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  //   const onPressGiftConfirmation = () => {
  //     navigation.navigate('GiftConfirmation', {
  //       data: rewardDetails,
  //     });
  //   };
  const defaultProps = {product, handleBuy, isCart, handleRemove};
  return <Design {...defaultProps} />;
};

export default ProductCard;
