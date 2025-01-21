/*import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons
import { Link } from 'expo-router'
import { useNavigation } from '@react-navigation/native';


const Profile = ({ navigation }) => {
    const navigation = useNavigation();

    const [profile, setProfile] = useState({
        name: 'John Doe',
        username: '@johndoe',
        bio: 'Software engineer and coffee enthusiast',
        location: 'New York, USA',
    });

    const [events, setEvents] = useState([
        { id: '1', title: 'Event 1', date: '2023-03-01', type: 'current' },
        { id: '2', title: 'Event 2', date: '2023-02-15', type: 'past' },
        { id: '3', title: 'Event 3', date: '2023-04-01', type: 'current' },
        { id: '4', title: 'Event 4', date: '2023-01-01', type: 'past' },
    ]);

    useEffect(() => {
        // fetch events from API or database
        const fetchEvents = async () => {
            const response = await fetch('https://example.com/api/events');
            const data = await response.json();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    const handleEditProfile = () => {
        // navigate to edit profile screen
        navigation.navigate('EditProfile');
    };

    const handleEventPress = (event) => {
        // navigate to event details screen
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.profilePicture}
                />
                <View style={styles.profileInfoContainer}>
                    <Text style={styles.profileName}>{profile.name}</Text>
                    <Text style={styles.profileUsername}>{profile.username}</Text>
                    <Text style={styles.profileLocation}>{profile.location}</Text>
                </View>
                <TouchableOpacity onPress={handleEditProfile} style={styles.cogwheelButton}>
                    <Ionicons name="settings-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.profileBio}>{profile.bio}</Text>
            </View>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleEventPress(item)}>
                        <View style={styles.eventContainer}>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <Text style={styles.eventDate}>{item.date}</Text>
                            <Text style={[styles.eventType, item.type === 'current' ? styles.currentEvent : styles.pastEvent]}>
                                {item.type === 'current' ? 'Current' : 'Past'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </SafeAreaView>
    );
};*/
import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Profile = () => {
    const [profile, setProfile] = useState({
        name: 'John Doe',
        username: '@johndoe',
        bio: 'Software engineer and coffee enthusiast',
        location: 'New York, USA',
    });

    const [events, setEvents] = useState([
        { id: '1', title: 'Event 1', date: '2023-03-01', type: 'current' },
        { id: '2', title: 'Event 2', date: '2023-02-15', type: 'past' },
        { id: '3', title: 'Event 3', date: '2023-04-01', type: 'current' },
        { id: '4', title: 'Event 4', date: '2023-01-01', type: 'past' },
    ]);

    const navigation = useNavigation();

    useEffect(() => {
        // Fetch events from API or database
        const fetchEvents = async () => {
            const response = await fetch('https://example.com/api/events');
            const data = await response.json();
            setEvents(data);
        };
        fetchEvents();
    }, []);

    const handleEditProfile = () => {
        // Navigate to edit profile screen
        navigation.navigate('editprofile');
    };

    const handleEventPress = (event) => {
        // Navigate to event details screen
        navigation.navigate('event', { eventId: event.id });
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={{ uri: 'https://via.placeholder.com/100' }}
                    style={styles.profilePicture}
                />
                <View style={styles.profileInfoContainer}>
                    <Text style={styles.profileName}>{profile.name}</Text>
                    <Text style={styles.profileUsername}>{profile.username}</Text>
                    <Text style={styles.profileLocation}>{profile.location}</Text>
                </View>
                <TouchableOpacity onPress={handleEditProfile} style={styles.cogwheelButton}>
                    <Ionicons name="settings-outline" size={24} color="#fff" />
                </TouchableOpacity>
            </View>
            <View>
                <Text style={styles.profileBio}>{profile.bio}</Text>
            </View>
            <FlatList
                data={events}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => handleEventPress(item)}>
                        <View style={styles.eventContainer}>
                            <Text style={styles.eventTitle}>{item.title}</Text>
                            <Text style={styles.eventDate}>{item.date}</Text>
                            <Text style={[styles.eventType, item.type === 'current' ? styles.currentEvent : styles.pastEvent]}>
                                {item.type === 'current' ? 'Current' : 'Past'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        paddingTop: 1,
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        //borderBottomWidth: 1,
        borderBottomColor: '#333',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 55,
        marginRight: 10,
    },
    profileInfoContainer: {
        flex: 1,
    },
    profileName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#fff',
    },
    profileUsername: {
        fontSize: 16,
        color: '#999',
    },
    profileBio: {
        fontSize: 16,
        color: '#999',
        padding: 10,
        alignItems: 'center',

    },
    profileLocation: {
        fontSize: 16,
        color: '#666',
    },
    editButtonText: {
        fontSize: 16,
        color: '#333',
    },
    eventContainer: {
        backgroundColor: '#333', // add white background to each event item
        padding: 15,
        borderRadius: 10, // add rounded corners
        marginBottom: 10, // add margin bottom to separate each item
        shadowColor: '#121212', // add shadow to give depth
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    eventTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    eventDate: {
        fontSize: 14,
        color: '#666',
        marginBottom: 5,
    },
    eventType: {
        fontSize: 14,
        color: '#999',
    },
});

export default Profile;