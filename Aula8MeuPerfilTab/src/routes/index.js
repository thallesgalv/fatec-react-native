import { NavigationContainer } from '@react-navigation/native'
import { AppRoutes } from './tabs.routes'

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes/>
    </NavigationContainer>
  )
}