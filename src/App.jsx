import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './css/app.css'
import { Register } from './pages/Register.jsx'
import { Login } from './pages/Login.jsx'
import { Events } from './pages/Events.jsx'
import { Orders } from './pages/Orders.jsx'
import { Profile } from './pages/Profile.jsx'
import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'

function App() {
  return (
    <>
      <div>
        <Header/>
          <main>
            <BrowserRouter>
              <Routes>
                <Route element={<Register/>} path='/register'></Route>
                <Route element={<Login/>} path='/login'></Route>
                <Route element={<Events/>} path='/'></Route>
                <Route element={<Orders/>} path='/orders'></Route>
                <Route element={<Profile/>} path='/profile'></Route>
              </Routes>
            </BrowserRouter>
          </main>
        <Footer/>
      </div>
    </>
  )
}

export default App
