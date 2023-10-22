import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { Timestamp } from 'firebase/firestore';

const testImg = require("../assets/image.jpg")

const EventInList = ({title, location, start, end, image, onPress}) => {
    let startFormattedDate = '';
    let endFormattedDate = '';
    
    if (start instanceof Timestamp) {
        const startDate = start.toDate();
        const startMonth = startDate.getMonth() + 1; // Month (0-11) is converted to (1-12)
        const startDateNumber = startDate.getDate();
        const startHours = startDate.getHours();
        const startMinutes = startDate.getMinutes();
        const startAmpm = startHours >= 12 ? 'PM' : 'AM';
        const startFormattedHours = startHours % 12 || 12;
        startFormattedDate = `${startMonth}/${startDateNumber} ${startFormattedHours}:${String(startMinutes).padStart(2, '0')} ${startAmpm}`;
    }

    if (end instanceof Timestamp) {
        const endDate = end.toDate();
        const endMonth = endDate.getMonth() + 1; // Month (0-11) is converted to (1-12)
        const endDateNumber = endDate.getDate();
        const endHours = endDate.getHours();
        const endMinutes = endDate.getMinutes();
        const endAmpm = endHours >= 12 ? 'PM' : 'AM';
        const endFormattedHours = endHours % 12 || 12;
        formattedEndDate = `${endMonth}/${endDateNumber} ${endFormattedHours}:${String(endMinutes).padStart(2, '0')} ${endAmpm}`;
    }

    return (
        <Pressable onPress={() => onPress()} style={styles.container}>
            <Image style={styles.image} source={image.uri == undefined ? testImg : image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{location} | {startFormattedDate}-{formattedEndDate}</Text>
            </View>
        </Pressable>
    )
}

export default EventInList

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    image: {
        width: "100%",
        height: 300,
        resizeMode: "cover",
    },
    title: {
        fontWeight: "bold",
        fontSize: 28
    },
    subtitle: {
        fontWeight: "500",
        fontSize: 20
    },
    detailsContainer: {
        padding: 10
    }
})