import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

import AppBar from '../components/AppBar'
import Button from '../components/Button'

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput value="Email Address" style={styles.input} />
        <TextInput value="password" style={styles.input} />
        <Button label="submit" />
        <View style={styles.footer}>
          <Text style={styles.footerText}>Already registerd?</Text>
          <Text style={styles.footerLinks}>Log In</Text>
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

export default SignUpScreen
