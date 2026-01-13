import { Route, Routes, Link } from "react-router-dom"
import { Suspense } from "react"
import Counter from "./components/counter"
import {MainAsyncPage} from "./pages/Main/MainPage.async"
import {AboutAsyncPage} from "./pages/About/AboutPage.async"
import './index.scss'

const App = () => {
  return (
    <div className="app">
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={ <MainAsyncPage />}/>
          <Route path="/about" element={<AboutAsyncPage/>} />
        </Routes>
      </Suspense>
      <Counter />
    </div>
  )
}

export default App
