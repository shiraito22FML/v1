// app/chat.js
import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


const initialChats = [
  { id: '1', event: 'Tech Conference', messages: ['Hello everyone!', 'Looking forward to the event!'] },
  { id: '2', event: 'Art Workshop', messages: ['Can’t wait to create some art!', 'What should I bring?'] },
];

export default function HomeScreen() {
  const navigation = useNavigation();



  const handleSelectChat = (id) => {
    navigation.navigate(`/chat/${id}`);
  };


  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header} /><Text />
      </View>
      <FlatList
        data={chats}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleSelectChat(item.id)} style={styles.chatItem}>
            <Text style={styles.chatTitle}>{item.event}</Text>
            <Text style={styles.chatMessage}>{item.messages[item.messages.length - 1]}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
        style={styles.chatList}
      />
      {selectedChatId && (
        <View style={styles.chatContainer}>
          <Text style={styles.chatHeader}>Chat for {chats.find(chat => chat.id === selectedChatId).event}</Text>
          <FlatList
            data={chats.find(chat => chat.id === selectedChatId).messages}
            renderItem={({ item }) => (
              <Text style={styles.message}>{item}</Text>
            )}
            keyExtractor={(item, index) => index.toString()}
            style={styles.messageList}
          />

        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 20,
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  chatList: {
    marginBottom: 20,
  },
  chatItem: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  chatMessage: {
    fontSize: 14,
    color: '#999',
  },
  chatContainer: {
    backgroundColor: '#222',
    borderRadius: 10,
    padding: 15,
    flex: 1,
  },
  chatHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  messageList: {
    flex: 1,
    marginBottom: 10,
  },
  message: {
    color: '#fff',
    marginBottom: 5,
  },


});