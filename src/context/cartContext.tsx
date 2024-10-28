import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Alert} from 'react-native';
import {Product} from '../types/types';

export interface CartItem extends Product {
  quantity: number;
  date: string;
}

interface CartContextType {
  cart: CartItem[];
  handleBuy: (product: Product) => void;
  handleRemove: (productId: number, title: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({
  children,
}) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    const saveCart = async () => {
      await AsyncStorage.setItem('cart', JSON.stringify(cart));
    };
    saveCart();
  }, [cart]);

  const handleBuy = (product: Product) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(
        item => item.id === product.id,
      );
      const currentDate = new Date().toISOString();

      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        updatedCart[existingProductIndex].quantity += 1;
        updatedCart[existingProductIndex].date = currentDate;
        return updatedCart;
      } else {
        const purchase = {...product, quantity: 1, date: currentDate};
        Alert.alert('Added to Cart', `${product.title} added to cart!`);
        return [...prevCart, purchase];
      }
    });
  };

  const handleRemove = (productId: number, title: string) => {
    setCart(prevCart => {
      const existingProductIndex = prevCart.findIndex(
        item => item.id === productId,
      );
      const currentDate = new Date().toISOString();
      if (existingProductIndex >= 0) {
        const updatedCart = [...prevCart];
        if (updatedCart[existingProductIndex].quantity > 1) {
          updatedCart[existingProductIndex].quantity -= 1;
          updatedCart[existingProductIndex].date = currentDate;
        } else {
          updatedCart.splice(existingProductIndex, 1);
          Alert.alert('Removed from Cart', `${title} removed from cart!`);
        }
        return updatedCart;
      }
      return prevCart;
    });
  };

  const value: CartContextType = {
    cart,
    handleBuy,
    handleRemove,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
