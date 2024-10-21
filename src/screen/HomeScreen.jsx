import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View, Text, Image, TouchableOpacity, Share, Button } from 'react-native';
import HeaderHomeScreen from '../components/HeaderHomeScreen';
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Clipboard from '@react-native-clipboard/clipboard';
const HomeScreen = () => {
  const [data, setData] = useState([]);
  const[tap,setTap]=useState(false);
  const onShare = async (text) => {
    try {
      const result = await Share.share({
        message: text.quote,
      });
    } catch (error) {
      Alert.alert(error.message);
    }
  };


  useEffect(() => {
    const getQuotes = async () => {
      try {
        const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes/5');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Extracting the 'quotes' array from the result
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };
    getQuotes();
    setTap(false)
  }, [tap]);

  return (
    <View style={styles.container}>
      <HeaderHomeScreen />
      <View style={styles.quoteContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <View style={styles.quoteItem}>
              <Image source={require("../assets/open-quote.png")} style={[styles.quoteSymbol, { alignSelf: 'flex-start' }]} />
              <Text style={styles.quoteText}>{item.quote} </Text>
              <Image source={require("../assets/close-quote.png")} style={[styles.quoteSymbol, { alignSelf: 'flex-end', marginBottom: 10 }]} />
              <Text style={styles.authorText}>- {item.author}</Text>
              <View style={styles.quoteBottomItem}>
                <TouchableOpacity onPress={() => {
                  Clipboard.setString(item.quote + "\n" + "~ " + item.author);
                  console.log('copied');
                }
                }>
                  <Entypo name='clipboard' color="black" size={30} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { onShare(item) }}>
                  <Entypo name='share-alternative' color="black" size={30} />
                </TouchableOpacity>
              </View>
            </View>
          )}
          keyExtractor={() => { return Math.floor(Math.random() * 1000000) }} // Ensures each item has a unique key
        />
      </View>


      <View style={styles.showMore}>
        <TouchableOpacity style={styles.showMoreBtn} activeOpacity={0.8} onPress={()=>setTap(true)}>
          <Text style={styles.btntxt}>Show more</Text>
          <View style={{marginLeft:10,paddingTop:4}}>
          <MaterialCommunityIcons name={"dots-triangle"} size={30}  style={{transform: [{rotate: '90deg'}]}} />
          </View>
        </TouchableOpacity>
      </View>

    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  quoteContainer: {
    flex: 1,
    padding: 16,
    // backgroundColor: '#88C273',
  },
  quoteSymbol: {
    height: 20,
    width: 20
  },
  quoteItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  quoteText: {
    fontSize: 20,
    marginVertical: 8,
    color: "black"
  },
  authorText: {
    fontSize: 15,
    fontStyle: 'italic',
    color: 'red',
    alignSelf: 'flex-end'
  },
  quoteBottomItem: {
    marginTop: 10,
    height: 40,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  showMore: {
    width: '100%',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  showMoreBtn: {
    flexDirection: 'row',
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
});
