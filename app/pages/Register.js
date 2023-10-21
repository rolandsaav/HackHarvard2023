import { Image, StyleSheet, Text, TouchableOpacity, View, Keyboard, Pressable } from 'react-native'
import CustomInput from '../components/CustomInput';

const brandImg = require("../assets/Brand.png")

const Register = ({navigation}) => {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Image style={styles.image} source={brandImg} />
            </View>
            <View style={styles.inputContainer}>
                <CustomInput headerEnabled name={"Name"} placeholder={"Your name"} />
                <CustomInput headerEnabled name={"Username"} placeholder={"Ryan Reynolds"} />
                <CustomInput headerEnabled name={"Email"} placeholder={"awesome@example.com"} />
                <CustomInput headerEnabled type={"number-pad"} name={"Phone Number"} placeholder={"This helps us connect you with people"} />
                <CustomInput secure headerEnabled name={"Password"} placeholder={"Don't share this!"} />
            </View>
            <View style={styles.submitContainer}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.submitText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <Text style={styles.extra} onPress={() => {navigation.navigate("Login")}}>
                    Already have an account? <Text style={styles.link}> Login</Text>
                </Text>
            </View>


        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        alignItems: "center",
        backgroundColor: "#FFF",
        flex: 1
    },
    image: {
        height: 100,
        resizeMode: "contain",

    },
    titleContainer: {
        paddingTop: 60,
        paddingBottom: 80
    },
    inputContainer: {
        paddingHorizontal: 20,
        width: "100%",
        gap: 20,
        marginBottom: 20
    },
    buttonContainer: {
        backgroundColor: "#e28f66",
        width: "100%",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 5
    },
    submitContainer: {
        paddingHorizontal: 20,
        width: "100%",
        alignItems: "center"
    },
    submitText: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: 400
    },
    extra: {
        fontSize: 16,
        marginTop: 10
    },
    link: {
        color: "#e28f66"
    }
})