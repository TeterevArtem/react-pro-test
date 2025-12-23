import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);


export default function App () {
  return (
    <div>This is react component</div>
  )
}

root.render(<App />)