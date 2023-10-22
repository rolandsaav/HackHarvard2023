import { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'


const Profile = () => {
    const { user, setUser } = useContext(AuthContext)
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-tiktdolzja-ue.a.run.app/user/${user.uid}`);
                const json = await response.json();
                setUserData(json);
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchData();
    }, [])

    return (
        <SafeAreaView style={styles.container}>
        {userData == null ? 
            <Text>Loading</Text>
         : 
            <Text>{user.email}</Text>} 
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        flex: 1,
    },
    name: {
        fontSize: 30
    }
})
