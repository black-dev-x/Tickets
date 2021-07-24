import React from 'react'
import { StatusBar } from 'react-native'
import Home from './Home'

const App = () => {
  return (
    <>
      <StatusBar barStyle='dark-content' hidden/>
      <Home username="Black"></Home>
    </>
  )
}

export default App
