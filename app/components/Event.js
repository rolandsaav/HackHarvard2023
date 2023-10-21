import { Image, StyleSheet, Text, View } from 'react-native'

const testImg = require("../assets/image.jpg")

const Event = () => {
  return (
    <View style={styles.container}>
      <Image  style={styles.image} source={testImg} />
      <Text style={styles.title}>Title Text</Text>
      <Text>Location | Time</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
    </View>
  )
}

export default Event

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderWidth: 1
    },
    image: {
        width: "100%",
        resizeMode: "cover",
        aspectRatio: 1
    },
    title: {
        fontWeight: "bold",
        fontSize: 28
    }
})