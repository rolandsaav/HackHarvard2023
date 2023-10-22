import { RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Event from '../components/Event';
import { useCallback, useEffect, useState } from 'react';
import { auth, db, storage } from '../firebase';
import { collection, getDocs } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const Home = () => {
    const [activities, setActivities] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    async function getActivities() {
        console.log(auth.currentUser.uid)
        console.log("Loading data")
        setRefreshing(true);
        if (refreshing) return
        let acts = [];
        const snapshot = await getDocs(collection(db, "activities"));
        snapshot.forEach((doc) => {
            const data = doc.data()
            acts.push(data)
        })
        const promises = acts.map(a => {
            return getDownloadURL(ref(storage, a.image))
        })
        urls = await Promise.all(promises)
        .then((urls) => {
            acts.forEach(a => {
                a.image = urls.find((u) => u.includes(a.id))
            })
        })
        setActivities([...acts])
        setRefreshing(false);
    }

    useEffect(() => {
        getActivities();
    }, []);

    const onRefresh = useCallback(() => {
        console.log("Refreshing")
        getActivities();

    }, []);

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }>
                {activities.map((a, i) => {
                    return <Event image={{uri: a.image}} title={a.type} description={a.desc} location={a.location} key={i} />
                })}

            </ScrollView>

        </SafeAreaView>

    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#222"
    }
})