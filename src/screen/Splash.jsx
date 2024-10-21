import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import BreakingBadLogo from '../components/BreakingBadLogo';

const Splash = () => {
    const navigator = useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            navigator.navigate('HomeScreen')
        },2500)
    },[]);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.centerView}>
            <BreakingBadLogo/>
            </View>
            <View style={styles.bottomView}>
                <Text style={styles.tagLine}>
                Say My Name. Unleash Iconic Wisdom
                </Text>
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    centerView: {
        width: 200,
        height: 100,
        flexDirection: 'column'
    },
    bottomView: {
        position: 'absolute',
        bottom: 20,
        width: "100%",
        justifyContent: 'center',
        alignItems: 'center'
    },
    tagLine: {
        color: "black",
        fontSize: 15,
        fontWeight: "500",
        fontStyle: 'italic'
    }
})