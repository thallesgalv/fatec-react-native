import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './drawer.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  )
}