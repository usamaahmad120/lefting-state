import { useState } from 'react'
import './App.css'
import Child from './component/Card'

function App() {
   const [showText, setShowText] = useState(false);
   const [name, setName] = useState('')


  return (
    <>
     <div>
      <Child onNameChange = {setName} />
      <h3>
        parent component
        
      </h3>
      <p>Enter: {name} </p>


     <h2>About</h2>
      {showText && <p>This is the paragraph text</p>}

      <button onClick={() => setShowText(!showText)}>
        Show More
      </button>
      
      </div>
  </>
)
}

export default App
