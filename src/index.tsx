import {createRoot} from 'react-dom/client'
import {Counter} from "./components/counter"

export default function App () {
  return (
    <Counter/>
  )
}
  

const root = createRoot(document.getElementById('root'));
root.render(<App/>)