import React from 'react'

import '../styles/App.css';
const App = () => {
  const ShowContent = () => {
    return(
      <div id="number-display">
        1<br> 2<br> 3</br> 4</br> 5</br>
      </div>
      <button id="back-button">Prev Page</button>
      <button id="next-button">Next Page</button>
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
