import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Dimensions, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const data = [require('../assets/thought.png'), require('../assets/thoughts.png')]
const { width, height } = Dimensions.get('window');
const Intro = () => {
  const navigator = useNavigation();
  return (
    <View style={styles.parentContainer}>
      <View style={styles.listView}>
        <FlatList horizontal={true} pagingEnabled showsHorizontalScrollIndicator={false} data={data} renderItem={({ item, index }) => {
          return (
            <View style={styles.itemView}>
              <Image
                source={item}
                style={styles.imageStyle}
              />
            </View>
          )
        }} />
      </View>

      <View style={styles.bottomView}>
        <TouchableOpacity activeOpacity={0.8} style={styles.continueButton} onPress={() => navigator.navigate('HomeScreen')}>
          <Text style={styles.btntxt}>
            Continue to Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Intro

const styles = StyleSheet.create({
  parentContainer: {
    borderWidth: 2,
    borderColor: 'red',
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  itemView: {
    width: width,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageStyle: {
    width: 200,
    height: 200
  },
  listView: {
    height: 200,
  },
  bottomView: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  continueButton: {
    backgroundColor: "#A66E38",
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    height: 50,
    borderRadius: 10
  },
  btntxt: {
    color: '#fff',
    fontSize: 18
  }

})