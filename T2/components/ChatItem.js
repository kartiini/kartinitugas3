// components/ChatItem.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ChatItem = ({ name, lastMessage, time }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.message}>{lastMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  message: {
    fontSize: 14,
    color: '#777',
  },
  time: {
    fontSize: 12,
    color: '#777',
  },
});

export default ChatItem;
