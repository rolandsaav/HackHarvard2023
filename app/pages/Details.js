import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { db, auth, storage } from '../firebase';
import { ref, getDownloadURL } from "firebase/storage";
import { collection, getDocs, arrayUnion, updateDoc, doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from 'react';

const Details = ({ navigation, route }) => {
    const [id, setId] = useState(route.params.id);
    const [users, setUsers] = useState([])
    const [activity, setActivity] = useState(null)
    const activityRef = doc(db, "activities", id);

    const getActivityData = async () => {
        const actRef = await getDoc(activityRef);
        const actData = actRef.data();
        setActivity(actData)
        console.log(actData)
        const attendees = actData.attendees;

        const promises = attendees.map(a => {
            console.log(a)
            const userRef = doc(db, "users", a);
            return getDoc(userRef);
        })

        let userData = []
        const userSnaps = await Promise.all(promises)
        userSnaps.forEach(u => {
            userData.push(u.data())
        })

        setUsers([...userData])
    }

    useEffect(() => {
        getActivityData();
    }, [id])

    return (
        <SafeAreaView style={styles.container}>
            {activity &&
                <View>
                    <Text style={styles.title}>{activity.title}</Text>
                    <Text>{activity.desc}</Text>
                    <Text style={styles.subtitle}>Members</Text>
                </View>
            }
            <View style={styles.userContainer}> 
            {users.map(u => {
                return (
                    <View key={u.id} style={styles.user}>
                        <Text style={styles.name}>{u.name}</Text>
                        <Text style={styles.email}>{u.email}</Text>
                        <Text style={styles.phoneNumber}>{u.phone}</Text>
                    </View>
                )
            })}
            </View>

        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 20
    },
    subtitle: {
        fontSize: 20,
        marginTop: 20
    },
    user: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        margin: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 16,
        color: '#666',
    },
    phoneNumber: {
        fontSize: 16,
        color: '#666',
    },
    userContainer: {
        flex: 1,
        gap: 20
    }
})