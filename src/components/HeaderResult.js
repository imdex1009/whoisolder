import React from 'react'

function HeaderResult({result, setResult}) {

  return (
    <>
    {result ?
      <div className="great">GREAT! ^^</div> : 
      <div className="cheer">CHEER UP T.T</div>
    }
    </>
  )
}

export default HeaderResult;