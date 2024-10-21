import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BreakingBadLogo from './BreakingBadLogo'

const HeaderHomeScreen = () => {
  return (
    <View style={styles.header}>
      <View style={styles.container}>
        <View style={styles.br}>
          <View style={styles.brBox}>
            <View style={styles.brNumber}>
              <Text style={{ fontSize: 12, color: 'black', fontWeight: '600' }}>35</Text>
            </View>
            <Text style={styles.brText}>Br</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: 'black', width: "75%", marginTop: 15 }}>eaking</Text>
        </View>
        <View style={styles.ba}>
          <View style={styles.baBox}>
            <View style={styles.brNumber}>
              <Text style={{ fontSize: 15, color: 'black', fontWeight: '600' }}>56</Text>
            </View>
            <Text style={styles.brText}>Ba</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600", color: 'black', width: "75%", marginTop: 15 }}>d</Text>
        </View>
      </View>
    </View>
  )
}

export default HeaderHomeScreen

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    marginLeft:"20%",
    height: '80%',
    width: "50%",
    flexDirection: "column",
  },
  br: {
    height: '50%',
    flexDirection: 'row'
  },
  ba: {
    height: "50%",
    flexDirection: 'row'
  },
  brBox: {
    width: "25%",
    height: '100%',
    backgroundColor: '#016127',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  baBox: {
    marginLeft: '25%',
    width: "25%",
    height: '100%',
    backgroundColor: '#016127',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  brText: {
    fontSize: 20,
    fontWeight: "600",
    color: 'black',
  },
  brNumber: {
    position: 'absolute',
    top: 1,
    right: 1
  }
})