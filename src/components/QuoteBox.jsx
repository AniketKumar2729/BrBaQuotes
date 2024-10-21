import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const QuoteBox = () => {
    return (<>

        <FlatList data={[1, 2, 3, 4, 5]} renderItem={() => {
            return (
                <View style={styles.quoteItem}>
                    <Text style={{ fontSize: 30, color: 'red' }}>QuoteBox</Text>
                </View>

            )
        }} />
    </>
    )
}

export default QuoteBox

const styles = StyleSheet.create({
    quoteItem: {
        width: '90%',
        // height:'50%',
        borderRadius: 10,
        elevation: 1,
        alignSelf:'center',
        marginTop:20
    }

})