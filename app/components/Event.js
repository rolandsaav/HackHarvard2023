import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FontAwesome } from '@expo/vector-icons';

const testImg = require("../assets/image.jpg")

const Event = ({ title, location, time, description, image, onYes, onMaybe, onNo }) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={image.uri == undefined ? testImg : image} />
            <View style={styles.detailsContainer}>
                <View>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.subtitle}>{location} | {time}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} onPress={onYes}>
                        <FontAwesome name="check" size={40} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onMaybe}>
                        <FontAwesome name="question" size={40} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button} onPress={onNo}>
                        <FontAwesome name="remove" size={40} color="red" />
                    </TouchableOpacity>
                </View>
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
        color: "#FFF",

    },
    subtitle: {
        fontWeight: "500",
        fontSize: 20,
        color: "#FFF"
    },
    description: {
        color: "#FFF",
        width: 160,
    },
    detailsContainer: {
        padding: 10,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#000",
        zIndex: 99,
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        height: 60,
        width: 60,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonContainer: {
        justifyContent: "space-evenly",
        alignItems: "center",
        flexDirection: "row",
        flex: 1,
    }
})