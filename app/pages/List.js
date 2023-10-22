import { Modal, RefreshControl, SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native'
import EventInList from '../components/EventInList';
import { useContext, useEffect, useState, useCallback } from 'react';
import { AuthContext } from '../context/AuthContext';
import { collection, getDocs, arrayUnion, updateDoc, doc, getDoc } from "firebase/firestore";
import { db, auth, storage } from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";

const List = ({navigation}) => {
    const [activities, setActivities] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [visible, setVisible] = useState(false)
    const userRef = doc(db, "users", auth.currentUser.uid);
    async function getActivities() {
        const userSnap = await getDoc(userRef);
        const userData = userSnap.data();
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
        acts = acts.filter(a => userData.seen.includes(a.id) && !userData.rejected.includes(a.id))
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

    const goToDetails = (id) => {
        navigation.navigate("Details", {id: id})
    }
    
    return (
        <SafeAreaView style={[styles.container]}>   
            
            <ScrollView refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }>
            {activities.map((a, i) => {
                return <EventInList onPress={() => goToDetails(a.id)} image={{uri: a.image}} title={a.type} location={a.location} start={a.start} end={a.end} key={i}/>
                })}
            </ScrollView>
        </SafeAreaView>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e28f66"
    },
    modal: {
        position: "absolute",
        width: "100%",
        height: 100,
        bottom: 0,
    }
})

export default List