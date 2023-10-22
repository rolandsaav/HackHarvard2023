import { RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native'
import EventInList from '../components/EventInList';
import { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import { collection, getDocs, arrayUnion, updateDoc, doc } from "firebase/firestore";
import { db, auth, storage } from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";

const List = () => {
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
                    console.log(a.id)
                    console.log(activities.length)
                return <EventInList image={{uri: a.image}} title={a.type} location={a.location} start={a.start} end={a.end} key={i}/>
                })}
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