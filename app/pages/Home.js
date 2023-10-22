import { RefreshControl, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Event from '../components/Event';
import { useCallback, useEffect, useState } from 'react';
import { auth, db, storage } from '../firebase';
import { collection, getDocs, arrayUnion, updateDoc, doc, getDoc } from "firebase/firestore";
import { ref, getDownloadURL } from "firebase/storage";

const Home = () => {
    const [activities, setActivities] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const userRef = doc(db, "users", auth.currentUser.uid);
    async function getActivities() {
        try {
            const userSnap = await getDoc(userRef);
            const userData = userSnap.data();

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
            acts = acts.filter(a => !userData.seen.includes(a.id) && a.ownerId !== auth.currentUser.uid)
            setActivities([...acts])
            setRefreshing(false);
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getActivities();
    }, []);

    const onRefresh = useCallback(() => {
        console.log("Refreshing")
        getActivities();

    }, []);

    const onYes = async (id) => {
        removeFromList(id);
        await updateDoc(userRef, {
            seen: arrayUnion(id),
            accepted: arrayUnion(id)
        })
        const acRef = doc(db, "activities", id);
        await updateDoc(acRef, {
            attendees: arrayUnion(auth.currentUser.uid)
        })
    }

    const onMaybe = async (id) => {
        removeFromList(id);
        await updateDoc(userRef, {
            seen: arrayUnion(id),
            possible: arrayUnion(id)
        })
        const acRef = doc(db, "activities", id);
        await updateDoc(acRef, {
            attendees: arrayUnion(auth.currentUser.uid)
        })
    }

    const onNo = async (id) => {
        removeFromList(id);
        await updateDoc(userRef, {
            seen: arrayUnion(id),
            rejected: arrayUnion(id)
        })
        
    }

    const removeFromList = (id) => {
        setActivities(activities.filter(a => a.id !== id))
    }

    return (
        <SafeAreaView style={[styles.container]}>
            <ScrollView refreshControl={
                <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
            }>
                {activities.map((a, i) => {
                    return <Event image={{ uri: a.image }} title={a.title} description={a.desc} location={a.location} key={i} onYes={() => onYes(a.id)} onMaybe={() => onMaybe(a.id)} onNo={() => onNo(a.id)} />
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