import { StyleSheet, Text } from 'react-native';
import MapView from 'react-native-maps';


export default function HomeScreen() {

    return (
        <MapView
            style={styles.map}
        // other props
        />
    )

};

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


