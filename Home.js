import React from 'react'
import { View, Image, Text, StyleSheet } from 'react-native'

const Home = props => (
  <View style={styles.home}>
    <Image style={styles.logo} source={require('./images/logo-bug.png')}></Image>
    <Text style={styles.title}>Welcome to Black Tickets</Text>
    <Text style={styles.subtitle}>{props.username}</Text>
    <View>
      <Text style={styles.text}>
        Id qui eiusmod laboris mollit minim laboris labore amet. Non ullamco labore excepteur cupidatat occaecat nisi incididunt. Et reprehenderit in aute fugiat excepteur irure.
      </Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  home: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 20
  },
  text: {
    textAlign: 'center',
    fontFamily: 'Ubuntu-Light',
    fontWeight: '300',
    paddingTop: 10
  },
  logo: {
    height: 100,
    width: 150
  },
  title: {
    fontFamily: 'Ubuntu-Regular'
  },
  subtitle: {
    paddingTop: 5,
    fontFamily: 'Ubuntu-Regular'
  }
})
export default Home
