import { func, shape, string } from 'prop-types'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

const Button = (props) => {
  const { label, onPress, style } = props
  return (
    <TouchableOpacity style={[styles.buttonContainer, style]} onPress={onPress}>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  style: shape()
}

Button.defaultProps = {
  onPress: null,
  style: null
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#467FD3',
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginBottom: 24
  },
  buttonLabel: {
    fontSize: 16,
    lineHeight: 32,
    paddingHorizontal: 24,
    paddingVertical: 8,
    color: '#ffffff'
  }
})

export default Button
