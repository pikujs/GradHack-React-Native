import { Avatar, Button, Card, Title, Paragraph, Divider, Surface, Text } from 'react-native-paper';
import {
  StyleSheet, View, StatusBar, FlatList, SafeAreaView, ScrollView, ViewBase
} from 'react-native'
import React, { Component } from 'react';
import { IconButton } from 'react-native-paper';
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

const UserScreen=({ navigation }) => (
    <SafeAreaView>
    <ScrollView>
    <View>
    <Card style={styles.card}>
    <Card.Title
    title="My focus products"
    right={(props) => <IconButton {...props} icon="forward" onPress={() => {}} />}
    />
    <Card.Actions style={styles.cardaction}>
      <Button style={styles.cardbox}>Product1</Button>
      <Button style={styles.cardbox}>Product2</Button>
    </Card.Actions>
    </Card>

    <Card style={styles.card}>
    <Card.Title
    title="Recommended products"
    right={(props) => <IconButton {...props} icon="forward" onPress={() => {}} />}
    />
    <Card.Actions style={styles.cardaction}>
      <Button style={styles.cardbox}>Product1</Button>
      <Button style={styles.cardbox}>Product2</Button>
      <Button style={styles.cardbox}>Product3</Button>
    </Card.Actions>
    </Card>
    <Card style={styles.card}>
    <Card.Title
    title="User Name"
    subtitle="50 mins ago"
    left={(props) => <Avatar.Icon {...props} icon="human" />}
    />
    <Card.Content>
      <Title>Tips for budgeting</Title>
      <Paragraph>set up your budget with these categories</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.cardaction}>
      <Button icon="share"></Button>
      <Button icon="comment"></Button>
      <Button icon="heart"></Button>
    </Card.Actions>
    </Card>

    <Card style={styles.card}>
    <Card.Title
    title="User Name"
    subtitle="50 mins ago"
    left={(props) => <Avatar.Icon {...props} icon="human" />}
    />
    <Card.Content>
      <Title>Tips for budgeting</Title>
      <Paragraph>set up your budget with these categories</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.cardaction}>
      <Button icon="share"></Button>
      <Button icon="comment"></Button>
      <Button icon="heart"></Button>
    </Card.Actions>
    </Card>

    <Card style={styles.card}>
    <Card.Title
    title="User Name"
    subtitle="50 mins ago"
    left={(props) => <Avatar.Icon {...props} icon="human" />}
    />
    <Card.Content>
      <Title>Tips for budgeting</Title>
      <Paragraph>set up your budget with these categories</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.cardaction}>
      <Button icon="share"></Button>
      <Button icon="comment"></Button>
      <Button icon="heart"></Button>
    </Card.Actions>
    </Card>
    </View>
    </ScrollView>
    </SafeAreaView>
   
  
)

export default UserScreen;