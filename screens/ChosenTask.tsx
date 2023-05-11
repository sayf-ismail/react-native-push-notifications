import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import Header from '../components/Header'
import Footer from '../components/Footer'


const ChosenTask = ({ navigation, GlobalState}: Props) => {

  const { chosenTask } = GlobalState

  return (
    <View style={styles.screen}>
      <Header />
      <View style={styles.body}>
        <Text>{chosenTask.task}</Text>
      </View>
      <Footer navigation={navigation} GlobalState={GlobalState} />
    </View>
  )
}
export default ChosenTask

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 8,
    width: '100%',
    backgroundColor: '#14141405',
    alignItems: 'center',
    justifyContent: 'center'
  },
})