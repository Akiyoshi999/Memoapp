import React from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import { useNavigation } from '@react-navigation/native'

const LogOutButton = () => {
  const navigation = useNavigation()

  const handlePress = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        })
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました')
      })
  }
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.7)',
  },
})

export default LogOutButton
