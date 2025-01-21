import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ChatScreen({ route }) {
    const { chatId } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Chat Screen</Text>
            <Text style={styles.chatId}>Chat ID: {chatId}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },
    chatId: {
        fontSize: 18,
        color: '#999',
        marginTop: 10,
    },
});