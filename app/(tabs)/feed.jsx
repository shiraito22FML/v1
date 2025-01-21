import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, FlatList, TouchableOpacity } from 'react-native';

export default function feed() {
    const DATA = [
        { id: '1', title: 'Item 1' },
        { id: '2', title: 'Item 2' },
        { id: '3', title: 'Item 3' },
        { id: '4', title: 'Item 4' },
    ];

    const [searchText, setSearchText] = useState('');
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        setShowMenu(!showMenu);
    };

    const handleOutsideClick = () => {
        if (showMenu) {
            setShowMenu(false);
        }
    };

    return (
        <View style={styles.container} onTouchStart={handleOutsideClick}>
            <View style={styles.searchAndListContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder="Search"
                        value={searchText}
                        onChangeText={(text) => setSearchText(text)}
                    />
                    <TouchableOpacity style={styles.searchBarRight} onPress={handleMenuClick}>
                        <Text style={styles.searchBarIcon}>{showMenu ? '▲' : '▼'}</Text>
                    </TouchableOpacity>
                </View>
                {showMenu && (
                    <View style={styles.menuContainer}>
                        <Text style={styles.menuItem}>Filter by name</Text>
                        <Text style={styles.menuItem}>Filter by date</Text>
                        <Text style={styles.menuItem}>Filter by category</Text>
                    </View>
                )}
                <FlatList
                    style={styles.eventList}
                    data={DATA}
                    renderItem={({ item }) => (
                        <View style={styles.listItemContainer}>
                            <Text style={styles.listItem}>{item.title}</Text>
                        </View>
                    )}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={() => <View style={{ height: 10 }} />} // remove separator
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        padding: 20,
    },
    searchAndListContainer: {
        flex: 1,
        position: 'relative',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    searchBarLeft: {
        marginRight: 10,
    },
    searchBarIcon: {
        fontSize: 20,
        color: 'white',
    },
    searchBar: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#121212',
        color: 'white',
    },
    searchBarRight: {
        marginLeft: 10,
    },
    menuContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
        zIndex: 1,
    },
    menuItem: {
        fontSize: 16,
        color: 'white',
        padding: 10,
    },
    eventList: {
        padding: 5,
        backgroundColor: '#121212',
        marginTop: 10, // add some margin top to make space for the menu
    },
    listItemContainer: {
        backgroundColor: '#333',
        padding: 10,
        borderRadius: 10,
        marginBottom: 5,
    },
    listItem: {
        fontSize: 16,
        color: 'white',
    },
});