// components/Header.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      <Text style={styles.title}>WhatsApp</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#075E54',
  },
  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
