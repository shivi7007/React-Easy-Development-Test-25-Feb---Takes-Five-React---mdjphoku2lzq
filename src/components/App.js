import React, {useState} from 'react'

import '../styles/App.css';
const App = () => {
  
  let [nums, setNums] = useState([1, 2, 3, 4, 5]);
  
  const Nextfuncthandel = () => {
      setNums([])
  }
  
  const Prevfuncthandel = () => {
     setNums([])
  }
  
  const ShowContent = () => {
    return(
      <div id="number-display">
      {nums.map(num => (<div>{num}</div>))}
      </div>
      <button id="back-button" onClick={Prevfuncthandel}>Prev Page</button>
      <button id="next-button" onClick={Nextfuncthandel}>Next Page</button>
    )
  }

  return (
    <div id="main">
      </ShowContent>
    
      <div></div>
    
    </div>
  )
}


export default App;
