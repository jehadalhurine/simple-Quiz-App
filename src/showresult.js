import React from 'react'

function showresult(props) {
  
  return (
    <div>
     
        <h2>the result is :{props.score}/4</h2>
        <button onClick={props.tryAgain} className='tryagain'>try again</button>
    </div>
  )
}

export default showresult