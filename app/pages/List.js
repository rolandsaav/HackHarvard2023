import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import EventInList from '../components/EventInList';

const List = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <EventInList title="Title text" location="Hell" time="Always"/>
                <EventInList title="Title text" location="Hell" time="Always"/>
                <EventInList title="Title text" location="Hell" time="Always"/>
                <EventInList title="Title text" location="Hell" time="Always"/>
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e28f66"
    }
})

export default List