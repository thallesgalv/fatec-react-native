import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from '../screens/Home'
import { Result } from '../screens/Result'

const { Screen, Navigator } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator>
      <Screen name='Home' component={Home} />
      <Screen name='Result' component={Result} />
    </Navigator>
  )
}
