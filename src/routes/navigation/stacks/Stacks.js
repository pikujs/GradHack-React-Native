import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import { colors } from 'theme'
import Home from 'scenes/home'
import Profile from 'scenes/profile'
import Details from 'scenes/details'
import Budgeting from 'scenes/budgeting'
import Community from 'scenes/community'
import HeaderLeft from './HeaderLeft'
import HeaderTitle from './HeaderTitle'

const navigationProps = {
  headerTintColor: 'white',
  headerStyle: { backgroundColor: colors.darkPurple },
  headerTitleStyle: { fontSize: 18 },
}

export const HomeNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => ({
      title: 'Home',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const ProfileNavigator = createStackNavigator({
  Profile: {
    screen: Profile,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  Details: {
    screen: Details,
    navigationOptions: () => ({
      title: 'Details',
      ...navigationProps,
    }),
  },
})

export const BudgetingNavigator = createStackNavigator({
  Budgeting: {
    screen: Budgeting,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  
})

export const CommunityNavigator = createStackNavigator({
  Community: {
    screen: Community,
    navigationOptions: ({ navigation }) => ({
      title: 'Profile',
      headerLeft: <HeaderLeft navigation={navigation} />,
      headerTitle: <HeaderTitle />,
      ...navigationProps,
    }),
  },
  
})
