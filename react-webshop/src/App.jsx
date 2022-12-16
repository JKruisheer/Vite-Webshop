import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Title from "./TestComponent.tsx";
import {AnotherTestComponent} from "./AnotherTestComponent";

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
          <a>Hello!</a>
          <Title subtitle={"test"} title={"Jahoor"}/>
          <AnotherTestComponent></AnotherTestComponent>
      </div>

  )
}

export default App
