import React from 'react'
import { Text, Linking } from 'react-native'

export function Link({ url, children }) {
  return (
    <Text style={{ color: 'blue' }} onPress={() => Linking.openURL(url)}>
      {children}
    </Text>
  )
}
