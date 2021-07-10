import React from 'react'
import { View, Image, Text } from 'react-native'

const Home = props => (
  <View>
    <Image source={require('./images/logo-bug.png')}></Image>
    <Text>Welcome to Black Tickets</Text>
    <Text>{props.username}</Text>
    <View>
      <Text>
        Id qui eiusmod laboris mollit minim laboris labore amet. Non ullamco labore excepteur cupidatat occaecat nisi incididunt. Et reprehenderit in aute fugiat excepteur irure.
      </Text>
    </View>
  </View>
)

export default Home
