import React from 'react'
import PropTypes from 'prop-types'
import {
  StyleSheet, View, StatusBar,FlatList,SafeAreaView, ScrollView} from 'react-native'

import { Avatar, Button, Card, Title, Paragraph, Divider,Surface,Text } from 'react-native-paper';
import { lessThan } from 'react-native-reanimated';


const styles = StyleSheet.create({
  root: {
    paddingTop:30,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  toptab:{
    paddingTop:20,
    paddingBottom:20,
  },
  
})

const TopNav=()=>{
  const tabdata=[
    {key: 'LeaderBoard'},
    {key: 'Challenge'},
    {key: 'Reward'},
    {key: 'UserFeed'},
    {key: 'John'},
    {key: 'Jillian'},
    {key: 'Jimmy'},
    {key: 'Julie'},
  ];
  return(
    <View style={styles.toptab}>
    <FlatList
        data={tabdata}
        horizontal={true}
        renderItem={({ item, index, separators }) => (
          <Button color="black">{item.key}</Button>
        )}
      />
    <Divider/>
    </View>)
}

const Community = ({ navigation }) => {
  //const { from } = navigation.state.params
  return (
    <SafeAreaView>
    <ScrollView>
     <TopNav/> 

  
    <Card>
    <Card.Cover source={require('./pic/money.jpg')} />
    <Card.Content>

    </Card.Content>
    <Card.Actions>
      <Button color="black">Best Budget Manager</Button>
    </Card.Actions>
  </Card>
 
  <Card>
    <Card.Cover source={require('./pic/budgetmanager.jpg')} />
    <Card.Content>
     
    </Card.Content>
    <Card.Actions>
      <Button color="black">Best Goal Crusher</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Cover source={require('./pic/resource1.jpg')} />
    <Card.Content>
     
    </Card.Content>
    <Card.Actions>
      <Button color="black">Best planner</Button>
    </Card.Actions>
  </Card>

  <Card>
    <Card.Cover source={require('./pic/challenge.jpg')} />
    <Card.Content>
     
    </Card.Content>
    <Card.Actions>
      <Button color="black">Best Challenge taker</Button>
    </Card.Actions>
  </Card>
  </ScrollView>
    </SafeAreaView>
  )
}



export default Community
