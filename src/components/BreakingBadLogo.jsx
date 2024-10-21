import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BreakingBadLogo = () => {
    return (
        <>
            <View style={styles.br}>
                <View style={styles.brBox}>
                    <View style={styles.brNumber}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '600' }}>35</Text>
                    </View>
                    <Text style={styles.brText}>Br</Text>
                </View>
                <Text style={{ fontSize: 30, fontWeight: "600", color: 'black', width: "75%", marginTop: 10 }}>eaking</Text>
            </View>
            <View style={styles.ba}>
                <View style={styles.baBox}>
                    <View style={styles.brNumber}>
                        <Text style={{ fontSize: 15, color: 'black', fontWeight: '600' }}>56</Text>
                    </View>
                    <Text style={styles.brText}>Ba</Text>
                </View>
                <Text style={{ fontSize: 30, fontWeight: "600", color: 'black', width: "75%", marginTop: 10 }}>d</Text>
            </View>
        </>
    )
}

export default BreakingBadLogo

const styles = StyleSheet.create({
    br: {
        height: '50%',
        flexDirection:'row'
    },
    ba: {
        height: '50%',
        flexDirection:'row'
    },
    brBox: {
        width: "25%",
        height: '100%',
        backgroundColor: '#016127',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    baBox: {
        marginLeft:'25%',
        width: "25%",
        height: '100%',
        backgroundColor: '#016127',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    brText: {
        fontSize: 30,
        fontWeight: "600",
        color: 'black',
    },
    brNumber:{
        position:'absolute',
        top:1,
        right:1
    }
})