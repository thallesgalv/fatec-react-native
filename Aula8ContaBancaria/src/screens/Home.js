import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import {
  Pressable,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View
} from 'react-native'

export function Home({navigation}) {
  const [nameInput, setNameInput] = React.useState('')
  const [ageInput, setAgeInput] = React.useState('')
  const [genderInput, setGenderInput] = React.useState(null)
  const [schoolingLevelInput, setSchoolingLevelInput] = React.useState(null)
  const [limitInput, setLimitInput] = React.useState(0)
  const [isBrazilianInput, setIsBrazilianInput] = React.useState(false)

  const goToResult = () => {
    navigation.navigate('Result', {nameInput,ageInput, genderInput, schoolingLevelInput, limitInput, isBrazilianInput})
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abertura de Conta</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome:</Text>
        <TextInput
          style={styles.input}
          value={nameInput}
          onChangeText={text => setNameInput(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Idade:</Text>
        <TextInput
          style={styles.input}
          value={ageInput}
          onChangeText={text => setAgeInput(text)}
          keyboardType='numeric'
        />
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Gênero:</Text>
        <Picker
          style={styles.picker}
          selectedValue={genderInput}
          onValueChange={itemValue => setGenderInput(itemValue)}
        >
          <Picker.Item label='Selecione o gênero' value='' />
          <Picker.Item label='Masculino' value='masculino' />
          <Picker.Item label='Feminino' value='feminino' />
        </Picker>
      </View>
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Escolaridade:</Text>
        <Picker
          style={styles.picker}
          selectedValue={schoolingLevelInput}
          onValueChange={itemValue => setSchoolingLevelInput(itemValue)}
        >
          <Picker.Item label='Selecione a escolaridade' value='' />
          <Picker.Item
            label='Ensino Fundamental incompleto'
            value='ensino fundamental incompleto'
          />
          <Picker.Item
            label='Ensino Fundamental completo'
            value='ensino fundamental completo'
          />
          <Picker.Item
            label='Ensino Médio incompleto'
            value='ensino médio incompleto'
          />
          <Picker.Item
            label='Ensino Médio completo'
            value='ensino médio completo'
          />
          <Picker.Item
            label='Ensino Superior incompleto'
            value='ensino superior incompleto'
          />
          <Picker.Item
            label='Ensino Superior completo'
            value='ensino superior completo'
          />
        </Picker>
      </View>
      <View style={styles.sliderContainer}>
        <Text style={styles.label}>Limite:</Text>
        <Slider
          style={styles.slider}
          minimumValue={10}
          maximumValue={100}
          step={5}
          onValueChange={value => setLimitInput(value)}
          value={limitInput}
        />
        <Text>{limitInput.toFixed(0)}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Brasileiro:</Text>
        <Switch
          style={styles.input}
          value={isBrazilianInput}
          onValueChange={value => setIsBrazilianInput(value)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={goToResult}>
          <Text style={styles.buttonText}>Confirmar</Text>
        </Pressable>
      </View>
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  label: {
    marginRight: 8,
  },
  input: {
    borderWidth: 1,
    padding: 2,
    width: '60%',
    borderRadius: 4,
    paddingLeft: 2,
  },
  pickerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  picker: {
    width: '60%',
  },
  sliderContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  slider: {
    width: 200,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#000',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
  },
})


