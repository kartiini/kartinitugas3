// components/ChatList.js
import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import ChatItem from './ChatItem';

const ChatList = () => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    // Simulasikan pengambilan data chat (misalnya dari API)
    const fetchedChats = [
      { id: 1, name: 'John Doe', lastMessage: 'Hello!', time: '10:30 AM' },
      { id: 2, name: 'Jane Smith', lastMessage: 'Hi there!', time: '09:15 AM' },
    ];

    setChats(fetchedChats);
  }, []); // Dependency array kosong berarti useEffect hanya dipanggil sekali saat komponen pertama kali dimuat.

  return (
    <FlatList
      data={chats}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ChatItem name={item.name} lastMessage={item.lastMessage} time={item.time} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatList;
