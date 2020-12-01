import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, Text, View, StatusBar,
} from 'react-native'
import Button from 'components/Button'
import { colors } from 'theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrayPurple,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
})

const Budgeting = ({ navigation }) => {
  //const { from } = navigation.state.params
  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.title}>budgeting</Text>
      <Button
        title="Go Back"
        color="white"
        backgroundColor={colors.pink}
        onPress={() => {
          navigation.goBack()
        }}
      />
    </View>
  )
}



export default Budgeting
