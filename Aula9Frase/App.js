import { AsyncStorage } from '@react-native-async-storage/async-storage'
import { StatusBar } from 'expo-status-bar'
import React, { useEffect, useState } from 'react'
import { StyleSheet, Switch, Text, View } from 'react-native'

export default function App() {
  const [isDay, setIsDay] = useState(true)
  const [isLitle, setIsLitle] = useState(true)

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const isDayFromStorage = await AsyncStorage.getItem('isDay')
    if (isDayFromStorage  !== undefined) setIsDay(JSON.parse(isDayFromStorage))

    const isLitleFromStorage = await AsyncStorage.getItem('isLitle')
    if (isLitleFromStorage !== undefined) setIsLitle(JSON.parse(isLitleFromStorage))
  }

  async function handleDayChange() {
    setIsDay(!isDay)
    await AsyncStorage.setItem('isDay', isDay.toString())
  }

  async function handleLitleChange() {
    setIsLitle(!isLitle)
    await AsyncStorage.setItem('isLitle', isLitle.toString())
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Frases</Text>
      <StatusBar style='auto' />
      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>Dia</Text>
          <Switch value={isDay} onChange={handleDayChange} />
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 16 }}
        >
          <Text>Pequeno</Text>
          <Switch value={isLitle} onChange={handleLitleChange} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          borderWidth: 4,
          margin: 16,
          backgroundColor: isDay ? '#fff' : '#000',
          borderColor: isDay ? '#000' : 'yellow',
        }}
      >
        <Text
          style={{
            fontSize: isLitle ? 16 : 32,
            textAlign: 'center',
            margin: 16,
            color: isDay ? '#000' : '#fff',
          }}
        >
          "A vingança nunca é plena, mata a alma e envenena"
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    borderBottomWidth: 4,
    borderBottomColor: '#000',
    margin: 16,
    marginTop: 64,
    paddingBottom: 8,
  },
})
