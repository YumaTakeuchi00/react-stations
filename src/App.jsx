// DO NOT DELETE

import { data } from 'browserslist'
import './App.css'
//import { useState } from 'react'
import { Header } from './Header'
import { Description } from './Description'
import { DogListContainer } from './DogListContainer'

/**
 * @type {() => JSX.Element}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <DogListContainer />
    </div>
  )
}

export default App
