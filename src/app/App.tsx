import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import { MainPage } from "pages/Main"
import { AboutPage } from "pages/About/"
import { useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames"
import './styles/index.scss'


const App = () => {
  const {theme, toggleTheme} = useTheme()
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={ <MainPage />}/>
          <Route path="/about" element={<AboutPage/>} />
        </Routes>
      </Suspense>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
    </div>
  )
}

export default App
