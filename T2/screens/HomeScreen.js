// screens/HomeScreen.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Header from '../components/Header';
import ChatList from '../components/ChatList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ChatList />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
