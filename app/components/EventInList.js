import { Image, StyleSheet, Text, View } from 'react-native'

const testImg = require("../assets/image.jpg")

const EventInList = ({title, location, time, image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={testImg} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{location} | {time}</Text>
            </View>
        </View>
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
        height: 150,
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