import React from 'react'
import HeaderResult from './HeaderResult'

function Header({header, setHeader, result, setResult}) {

  return (
    <>
    {header ? <div>WHO IS ORDER?</div> : <HeaderResult result={result} setResult={setResult}/>}
   </>
  )
}

export default Header;