import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keeb} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <Text style={{color: "#FFF"}}>Open up App.js to start working on your app!</Text>
      <TextInput placeholderTextColor={"#FFF"} style={styles.input} placeholder="Useless placeholder"/>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1d1e21',
  },
  input: {
    color: "#FFF",
    fontSize: 24,
    width: "100%",
    borderWidth: 1,
    borderColor: "#FFF",
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  keeb: {
    height: "100%",
    borderWidth: 1,
    borderColor: "#FFF",
    justifyContent: "flex-end"
  }
});
