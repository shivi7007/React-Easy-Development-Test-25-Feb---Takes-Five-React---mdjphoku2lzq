import React, {useState} from 'react'

import '../styles/App.css';
const App = () => {
  
  let [nums, setNums] = useState(1);
  
  const Nextfuncthandel = () => {
    nums = nums+1;
    return nums;
  }
  
  const Prevfuncthandel = () => {
    nums = nums-1;
    return nums;
  }
  
  const ShowContent = () => {
    return(
      <div id="number-display">
       {nums}
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
