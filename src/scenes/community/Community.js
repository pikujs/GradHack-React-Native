import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {
  StyleSheet, View, StatusBar, FlatList, SafeAreaView, ScrollView, ViewBase
} from 'react-native'
import { TabNavigator } from 'react-navigation';
import { Avatar, Button, Card, Title, Paragraph, Divider, Surface, Text } from 'react-native-paper';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import Profile from '../profile'
import LeaderboardScreen from './Leaderboard.js'
import EventsScreen from './Challenge.js'
import  UserScreen from './Userfeed.js'

const ComNavigator = createMaterialTopTabNavigator({
    LeaderBoard:{
        screen:LeaderboardScreen,
        navigationOptions:{
            title:"LeaderBoard"
        }
    },
    Challenge:{
        screen:EventsScreen,
        navigationOptions:{
            title:"Challenge"
        }
    },
    Reward:{
        screen:Profile,
        navigationOptions:{
            title:"Reward"
        }
    },
    UserFeed:{
        screen:UserScreen,
        navigationOptions:{
            title:"UserFeed"
        }
    }
},{
    animationEnabled:false,
    initialRouteName:"LeaderBoard",
    backBehavior:"none",
    order:["LeaderBoard","Challenge","Reward","UserFeed"],
    tabBarOptions:{
        activeTintColor:"red",
        inactiveTintColor:"black",
        pressColor:"red",
        scrollEnabled:true,
        tabStyle:{
            backgroundColor:"white",
            height:30,
            marginBottom:10,
            
        },
        indicatorStyle:{
            fontSize:10,
            height:5
        },
        labelStyle:{
          
        },
        style:{
            backgroundColor:"white",
        }
    }
})



const styles = StyleSheet.create(
  {
  root: {
    paddingTop: 30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  toptab: {
    paddingTop: 20,
    paddingBottom: 20,
  },
  card: {
    margin: 15,
    elevation: 2,
  },
})




export default ComNavigator
