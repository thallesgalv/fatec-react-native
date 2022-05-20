import { createDrawerNavigator } from '@react-navigation/drawer'
import { Experiencia } from '../screens/Experiencia'
import { Formacao } from '../screens/Formacao'
import { Pessoal } from '../screens/Pessoal'

const { Screen, Navigator } = createDrawerNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name='Pessoal' component={Pessoal} />
      <Screen name='Formacao' component={Formacao} />
      <Screen name='Experiencia' component={Experiencia} />
    </Navigator>
  )
}
