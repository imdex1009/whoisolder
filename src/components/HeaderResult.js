import React from 'react'

function HeaderResult({result, setResult}) {

  return (
    <>
    {result ? <div>GREAT! ^^</div> : <div>CHEER UP T.T</div>}
    </>
  )
}

export default HeaderResult;