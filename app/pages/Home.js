import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import Event from '../components/Event';
import { useContext, useEffect, useState } from 'react';
import { db } from '../firebase';
import { AuthContext } from '../context/AuthContext';
import { collection, getDocs } from "firebase/firestore";


const Home = () => {
    const { u, setUser } = useContext(AuthContext)
    const [activities, setActivities] = useState([])

    useEffect(() => {
        async function getActivities() {
            let acts = [];
            const snapshot = await getDocs(collection(db, "activities"));
            snapshot.forEach((doc) => {
                acts.push(doc.data());
            });
            setActivities([...activities, ...acts])
        }
        getActivities();
    }, [])

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView>
                {activities.map((a, i) => {
                    console.log(a.id)
                    console.log(activities.length)
                    return <Event title={a.type} description={a.desc} location={a.location} key={i}/>
                })}

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