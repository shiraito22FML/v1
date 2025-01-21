import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CreateEventScreen() {
    const navigation = useNavigation();
    const [eventName, setEventName] = useState('');
    const [eventLocation, setEventLocation] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventImage, setEventImage] = useState(null);

    const [events, setEvents] = useState([
        { id: '1', title: 'Event 1', date: '2023-03-01', type: 'current' },
        { id: '2', title: 'Event 2', date: '2023-02-15', type: 'past' },
        { id: '3', title: 'Event 3', date: '2023-04-01', type: 'current' },
        { id: '4', title: 'Event 4', date: '2023-01-01', type: 'past' },
    ]);

    const handleCreateEvent = () => {
        // Call API or perform logic to create the event
        console.log('Event created:', {
            name: eventName,
            location: eventLocation,
            description: eventDescription,
            image: eventImage,
        });

        // Reset the form after creating the event
        setEventName('');
        setEventLocation('');
        setEventDescription('');
        setEventImage(null);
    };

    const handleEventPress = (item) => {
        // Navigate to event details screen
        navigation.navigate('event', { eventId: item.id });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.title}>Create Event</Text>
                    <View style={styles.eventImageContainer}>
                        {eventImage ? (
                            <Image source={{ uri: eventImage }} style={styles.eventImage} />
                        ) : (
                            <TouchableOpacity onPress={() => console.log('Select image')}>
                                <Text style={{ color: '#fff' }}>Select Image</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputHalf}
                            placeholder="Event Name"
                            placeholderTextColor="#999"
                            value={eventName}
                            onChangeText={setEventName}
                        />
                        <TextInput
                            style={styles.inputHalf}
                            placeholder="Event Location"
                            placeholderTextColor="#999"
                            value={eventLocation}
                            onChangeText={setEventLocation}
                        />
                    </View>
                    <TextInput
                        style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
                        placeholder="Event Description"
                        placeholderTextColor="#999"
                        value={eventDescription}
                        onChangeText={setEventDescription}
                        multiline={true}
                    />
                    <TouchableOpacity style={styles.createButton} onPress={handleCreateEvent}>
                        <Text style={styles.createButtonText}>Create Event</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.spaceBetween} />
                <View style={{ flex: 1 }}>
                    <View style={styles.eventListTitle}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>My Events</Text>
                    </View>
                    <FlatList
                        data={events}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => handleEventPress(item)}>
                                <View style={styles.eventContainer}>
                                    <Text style={styles.eventTitle}>{item.title}</Text>
                                    <Text style={styles.eventDate}>{item.date}</Text>
                                    <Text style={styles.eventType}>{item.type === 'current' ? 'Current' : 'Past'}</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => item.id}
                        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                    />
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        padding: 10,
    },
    eventImageContainer: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: '#fff',

    },
    eventImage: {
        width: '100%',
        height: 150,
        resizeMode: 'cover',
        borderRadius: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    inputHalf: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
        width: '48%',
        color: 'white',
    },
    input: {
        backgroundColor: '#333',
        borderRadius: 10,
        padding: 10,
        marginBottom: 20,
        color: 'white',
        placeholderTextColor: 'white',

    },
    createButton: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
    },
    createButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },

    spacebeteen: {
        padding: 10,
    },

    EventlistTitle: {
        backgroundColor: '#121212',
        padding: 10,
        borderRadius: 10,
    },
    eventListTitleText: {
        color: '#fff', // Set the text color to white
        fontSize: 48, // Set the font size

    },
    eventList: {
        flex: 1,
        padding: 5,
        backgroundColor: '#121212',
        marginTop: 16, // add some margin top to make space for the menu
    },
    listItem: {
        fontSize: 16,
        color: 'white',
    },
    listItemContainer: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
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

