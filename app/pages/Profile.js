import { useContext, useEffect, useState } from 'react'
import { SafeAreaView, StyleSheet, Text, View, Image} from 'react-native'
import { auth } from '../firebase'


const Profile = () => {
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`https://server-tiktdolzja-ue.a.run.app/user/${auth.currentUser.uid}`);
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
            <Text style={{paddingTop: 80, width: "100%", textAlign: "center"}}>Loading</Text>
         : 
         <View style={styles.container}>
         <View style={styles.header}>
           <Image
             source={{}} // Replace with your user's profile picture
             style={styles.profileImage}
           />
           <Text style={styles.headerText}>User Profile</Text>
         </View>
         <View style={styles.card}>
           <View style={styles.infoRow}>
             <Text style={styles.label}>Name:</Text>
             <Text style={styles.text}>{userData.name}</Text>
           </View>
   
           <View style={styles.infoRow}>
             <Text style={styles.label}>Username:</Text>
             <Text style={styles.text}>{userData.username}</Text>
           </View>
   
           <View style={styles.infoRow}>
             <Text style={styles.label}>Email:</Text>
             <Text style={styles.text}>{userData.emai}</Text>
           </View>
   
           <View style={styles.infoRow}>
             <Text style={styles.label}>Phone Number:</Text>
             <Text style={styles.text}>{userData.phone}</Text>
           </View>
         </View>
       </View>} 
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
    },
    header: {
        backgroundColor: '#3498db',
        padding: 20,
        alignItems: 'center',
      },
      headerText: {
        fontSize: 24,
        color: 'white',
        marginTop: 10,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      card: {
        backgroundColor: 'white',
        margin: 20,
        padding: 15,
        borderRadius: 10,
        elevation: 3,
      },
      infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
      },
      label: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      text: {
        fontSize: 16,
      },
})
