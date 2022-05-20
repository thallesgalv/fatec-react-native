import { MaterialIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Experiencia } from '../screens/Experiencia'
import { Formacao } from '../screens/Formacao'
import { Pessoal } from '../screens/Pessoal'

const { Screen, Navigator } = createBottomTabNavigator()

export function AppRoutes() {
  return (
    <Navigator style={{flex: 1}}>
      <Screen name='Experiencia' component={Experiencia} options={{ 
        tabBarIcon: () => (
          <MaterialIcons name='work' size={24}/>
        )
      }} />
      <Screen name='Formacao' component={Formacao} options={{ 
        tabBarIcon: ({color,size}) => (
          <MaterialIcons name='school' size={24}/>
        )
      }} />
      <Screen name='Pessoal' component={Pessoal} options={{ 
        tabBarIcon: ({color,size}) => (
          <MaterialIcons name='person' size={24}/>
        )
      }} />
    </Navigator>
  )
}
