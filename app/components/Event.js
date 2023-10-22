import { Image, StyleSheet, Text, View } from 'react-native'

const testImg = require("../assets/image.jpg")

const Event = ({title, location, time, description, image}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subtitle}>{location} | {time}</Text>
                <Text style={{color: "#FFF"}}>{description}</Text>
            </View>
        </View>
    )
}

export default Event

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1,
        backgroundColor: "#FFF"
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        aspectRatio: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 28,
        color: "#FFF"
    },
    subtitle: {
        fontWeight: "500",
        fontSize: 20,
        color: "#FFF"
    },
    detailsContainer: {
        padding: 10,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
        zIndex: 99,
        width: "100%"
    }
})