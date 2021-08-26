import React, { useEffect, useState } from 'react'
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native'
import firebase from 'firebase'

import Button from '../components/Button'
import Loading from '../components/Loading'
import { translateErrors } from '../utils'

const LoginScreen = (props) => {
  const { navigation } = props
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isloading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }]
        })
      } else {
        setLoading(false)
      }
    })
    return unsubscribe
  }, [])

  const handlePress = () => {
    setLoading(true)
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'MemoList' }]
        })
      })
      .catch((error) => {
        const errorMsg = translateErrors(error.code)
        Alert.alert(errorMsg.title, errorMsg.description)
      })
      .then(() => {
        setLoading(false)
      })
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isloading} />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput
          value={email}
          style={styles.input}
          onChangeText={(text) => {
            setEmail(text)
          }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          value={password}
          style={styles.input}
          onChangeText={(text) => {
            setPassword(text)
          }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button label="submit" onPress={handlePress} />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLinks}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SignUp' }]
                })
              }}
            >
              Sign up here!
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8'
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 34
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8
  },
  footerLinks: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3'
  },
  footer: {
    flexDirection: 'row'
  }
})

export default LoginScreen
