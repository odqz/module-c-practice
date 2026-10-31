import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import { Register } from './pages/Register.jsx'
import { Login } from './pages/Login.jsx'
import { Events } from './pages/Events.jsx'
import { Orders } from './pages/Orders.jsx'
import { Profile } from './pages/Profile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App/>} path="/"></Route>
        <Route element={<Register/>} path='/register'></Route>
        <Route element={<Login/>} path='/login'></Route>
        <Route element={<Events/>} path='/events'></Route>
        <Route element={<Orders/>} path='/orders'></Route>
        <Route element={<Profile/>} path='/profile'></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
