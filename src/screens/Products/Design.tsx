import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ListRenderItem,
  StatusBar,
} from 'react-native';
import React from 'react';
import {styles} from './style';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ProductCard from '../../components/Card';
import {Product} from '../../types/types';
import {RefreshControl} from 'react-native-gesture-handler';

interface DesignProps {
  filteredProducts: Product[] | null | undefined;
  loading: boolean;
  getProductsData: () => void;
  searchQuery: string;
  handleSearch: (text: string) => void;
  navigateToCart: () => void;
  cart: Product[];
}

const Design: React.FC<DesignProps> = ({
  filteredProducts,
  loading,
  getProductsData,
  searchQuery,
  handleSearch,
  navigateToCart,
  cart,
}) => {
  const renderItem: ListRenderItem<Product> = ({item}) => (
    <ProductCard product={item} />
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.contentView}>
          <View style={styles.inputCont}>
            <TextInput
              placeholder="Search by title or Category"
              placeholderTextColor={'gray'}
              style={styles.input}
              value={searchQuery}
              onChangeText={handleSearch}
            />
            <FontAwesome name="search" size={25} color="#000000" />
          </View>
          <View>
            {cart?.length && (
              <View style={styles.countView}>
                <Text style={styles.countTxt}>{cart.length}</Text>
              </View>
            )}
            <TouchableOpacity
              style={styles.cartBtn}
              activeOpacity={0.8}
              onPress={navigateToCart}>
              <AntDesign name="shoppingcart" size={25} color={'#000000'} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.divider} />
      <FlatList
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={getProductsData} />
        }
        data={filteredProducts}
        ListEmptyComponent={
          <View>
            <Text style={styles.noProduct}>No Product Found!</Text>
          </View>
        }
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default Design;
