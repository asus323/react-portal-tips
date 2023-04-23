import { useState } from 'react'
import ReactDom from "react-dom";
function App() {
  const [count, setCount] = useState(0)

  return ReactDom.createPortal(
    <div className="some styles">
    <h1 className="some more styles">mehdi hajati</h1>
    </div>
    ,
    document.getElementById("child-root")
  )
}

export default App
