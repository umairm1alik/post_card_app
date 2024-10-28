import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Product} from '../../types/types';
import {CartItem} from '../../context/cartContext';
import moment from 'moment';

interface DesignProps {
  product: Product | CartItem;
  handleBuy: (product: Product) => void;
  isCart: boolean | undefined;
  handleRemove: (productId: number, title: string) => void;
}

const Design: React.FC<DesignProps> = ({
  product,
  handleBuy,
  isCart,
  handleRemove,
}) => {
  return (
    <View style={styles.card}>
      <View style={styles.contentContainer}>
        {isCart && product.date ? (
          <Text style={[styles.price, {marginBottom: 5}]}>
            {moment(product.date).fromNow()}
          </Text>
        ) : null}
        <Text style={styles.heading}>{product.title}</Text>
        <Text style={styles.description} numberOfLines={3}>
          {product.description}
        </Text>
        <View style={[styles.buyContainer, styles.aligntContent]}>
          <Text style={[styles.description, styles.price]}>
            {`${product.price} $`}
          </Text>
          {isCart ? (
            <View style={styles.aligntContent}>
              <TouchableOpacity
                style={[styles.addBTn, styles.remBtn]}
                onPress={() => handleRemove(product.id, product.title)}>
                <Text style={styles.counterTxt}>-</Text>
              </TouchableOpacity>
              <Text style={[styles.counterTxt, {marginHorizontal: 5}]}>
                {product?.quantity}
              </Text>
              <TouchableOpacity
                style={[styles.addBTn]}
                onPress={() => handleBuy(product)}>
                <Text style={[styles.counterTxt, {color: '#FFFFFF'}]}>+</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.addToCart}
              activeOpacity={0.6}
              onPress={() => handleBuy(product)}>
              <Text style={styles.btnTxt}>Buy</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View style={styles.imgContainer}>
        <Image
          style={styles.img}
          source={{
            uri: product.image,
          }}
        />
      </View>
    </View>
  );
};

export default Design;
