import React from 'react'
import Header from '../components/Header';
import Score from '../components/Score'
import People from '../components/People'

function Play() {


  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <Score />
      </div>
      <div>
        <People />
      </div>     
   </>
  )
}

export default Play;