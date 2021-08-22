import React from 'react'
import { StyleSheet, View } from 'react-native'
import CircleButton from '../components/CircleButton'
import MemoList from '../components/MemoList'

const MemoListScreen = (props) => {
  const { navigation } = props
  return (
    <View style={styles.container}>
      <View>
        <MemoList />

        <MemoList />

        <MemoList />
      </View>

      <CircleButton
        name="plus"
        onPress={() => {
          navigation.navigate('MemoCreate')
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F4F8',
  },
})
export default MemoListScreen
