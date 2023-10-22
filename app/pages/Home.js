import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import Event from '../components/Event';

const Home = () => {
    const tabBarHeight = useBottomTabBarHeight();

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                <Event title="Flag Football" location="Riverbend Park" time="3:30PM - 4:30PM"/>
                <Event title="Mario Kart" location="183 Kirkland St" time="6:00PM - 8:00PM"/>
                <Event title="Yoga" location="Cambridge Common" time="7:00AM - 8:00AM"/>
                <Event title="Pickup Basketball" location="Conway Park" time="Always"/>
            </ScrollView>
        </SafeAreaView>

    )
}   

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e28f66"
    }
})