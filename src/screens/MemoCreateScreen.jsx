import React, { useState } from 'react'
import { Alert, StyleSheet, TextInput, View } from 'react-native'

import firebase from 'firebase'

import CircleButton from '../components/CircleButton'
import KeyboardSafeView from '../components/KeyBoradSafeView'
import { translateErrors } from '../utils'

const MemoCreateScreen = (props) => {
  const { navigation } = props
  const [bodyText, setBodyText] = useState('')

  const handlePress = () => {
    const { currentUser } = firebase.auth()
    const db = firebase.firestore()
    const ref = db.collection(`users/${currentUser.uid}/memos`)
    ref
      .add({
        bodyText,
        updatedAt: new Date()
      })
      .then(() => {
        navigation.goBack()
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code)
        Alert.alert(errorMsg.title, errorMsg.bodyText)
      })
  }

  return (
    <KeyboardSafeView style={styles.container} behavior="height">
      <View style={styles.inputContainer}>
        <TextInput
          value={bodyText}
          multiline
          style={styles.input}
          onChangeText={(text) => {
            setBodyText(text)
          }}
          autoFocus
        />
      </View>
      <CircleButton name="check" onPress={handlePress} />
    </KeyboardSafeView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inputContainer: {
    paddingHorizontal: 27,
    paddingVertical: 32,
    flex: 1
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    fontSize: 16,
    lineHeight: 24
  }
})

export default MemoCreateScreen
