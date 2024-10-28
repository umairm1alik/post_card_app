import {View, Text} from 'react-native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Design from './Design';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Product} from '../../types/types';
import axios from 'axios';
import {RootStackParamList} from '../../types/rootStack';
import {StackNavigationProp} from '@react-navigation/stack';
import {debounce} from '../../utils/utils';
import {useCart} from '../../context/cartContext';

interface ProductScreenProps {}
const Products: React.FC<ProductScreenProps> = ({}) => {
  const {cart} = useCart();
  const [products, setProducts] = useState<Product[] | null | undefined>(null);
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | null | undefined
  >(products);
  const [loading, setLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getProductsData = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://fakestoreapi.com/products');

      if (res.data) {
        setProducts(res.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const debouncedSearch = useMemo(() => {
    return debounce((query: string) => {
      const lowerQuery = query.toLowerCase();
      if (!products?.length) {
        return;
      }
      const filtered: Product[] | undefined = products.filter(
        product =>
          product.title.toLowerCase().includes(lowerQuery) ||
          product.category.toLowerCase().includes(lowerQuery),
      );
      setFilteredProducts(filtered);
    }, 300); // 300ms delay
  }, [products]);

  const handleSearch = useCallback(
    (text: string) => {
      setSearchQuery(text);
      debouncedSearch(text); // Call the debounced function
    },
    [debouncedSearch],
  );

  useEffect(() => {
    // Call debouncedSearch whenever products change
    debouncedSearch(searchQuery);
  }, [products, debouncedSearch, searchQuery]);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateToCart = () => {
    navigation.navigate('Cart');
  };
  const defaultProps = {
    filteredProducts,
    loading,
    getProductsData,
    searchQuery,
    handleSearch,
    navigateToCart,
    cart,
  };
  return <Design {...defaultProps} />;
};

export default Products;
