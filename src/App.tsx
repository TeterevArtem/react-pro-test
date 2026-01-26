import { Route, Routes, Link } from "react-router-dom"
import { Suspense} from "react"
import {MainAsyncPage} from "./pages/Main/MainPage.async"
import {AboutAsyncPage} from "./pages/About/AboutPage.async"
import { useTheme } from "./theme/useTheme"
import './styles/index.scss'


const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={`app ${theme}`}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={ <MainAsyncPage />}/>
          <Route path="/about" element={<AboutAsyncPage/>} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </div>
  )
}

export default App
