import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ListRenderItem,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import IconIcons from 'react-native-vector-icons/Ionicons';
import {Product} from '../../types/types';
import ProductCard from '../../components/Card';

interface DesignProps {
  navigateBack: () => void;
  cart: Product[];
}

const Design: React.FC<DesignProps> = ({navigateBack, cart}) => {
  const renderItem: ListRenderItem<Product> = ({item}) => (
    <ProductCard product={item} isCart={true} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.alignItems}>
          <TouchableOpacity
            style={styles.backBtn}
            activeOpacity={0.8}
            onPress={navigateBack}>
            <IconIcons name="chevron-back" size={30} color={'#FFFFFF'} />
          </TouchableOpacity>
          <Text style={styles.heading}>Cart</Text>
          <View style={[styles.divider, {width: 30}]} />
        </View>
      </View>
      <View style={styles.divider} />
      <FlatList
        data={cart}
        ListEmptyComponent={
          <View>
            <Text style={styles.noProduct}>No Product Found in Cart!</Text>
          </View>
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Design;
