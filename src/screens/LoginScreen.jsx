import React from 'react'
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'

import Button from '../components/Button'

const LoginScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="password" style={styles.input} />
        <Button
          label="submit"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'MemoList' }],
            })
          }}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Not registered?</Text>
          <TouchableOpacity>
            <Text
              style={styles.footerLinks}
              onPress={() => {
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'SignUp' }],
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
    backgroundColor: '#F0F4F8',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: 'bold',
    marginBottom: 34,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#DDDDDD',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLinks: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467FD3',
  },
  footer: {
    flexDirection: 'row',
  },
})

export default LoginScreen
