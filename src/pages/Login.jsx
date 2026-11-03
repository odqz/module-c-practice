import { useState } from 'react'
import '../css/auth.css'
import { API } from '../Api.jsx'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const [user, setUser] = useState({})
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const nav = useNavigate()

  function loginUser(e) {
    e.preventDefault()

    API.post('/auth/login', {username: username, password: password})
    .then(res => {
      setUser(res.data)
      localStorage.setItem('authToken', res.data.accessToken)
      nav('/')
    })
    .catch(err => document.querySelector('.login-error').textContent = err)
  }

  return (
    <>
      <div className="login-page">
        <div className="login-outer">
          <div className="login-box">
            <div className="login-header">
              <h2>Login</h2>
              <h3>To order from our high variety images!</h3>
            </div>
            {/* <!-- Error message placeholder --> */}
            <p className="login-error">Email and password are required!</p>
            <form className="login-form" onSubmit={loginUser}>
              {/* <!-- Email --> */}
              <div className="form-group">
                <label htmlFor="user">
                  Username
                  <span className="required">*</span>
                </label>
                <input 
                  type="text" 
                  id="text" 
                  placeholder="Customer Username" 
                  onChange={(e) => { setUsername(e.target.value) }}
                  value={username}
                />
              </div>
              {/* <!-- Password --> */}
              <div className="form-group">
                <label htmlFor="password">
                  Password
                  <span className="required">*</span>
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Customer Password"
                  onChange={(e) => { setPassword(e.target.value) }}
                  value={password}
                />
              </div>
              <button type="submit" className="login-btn">Login</button>
            </form>
            <div className="login-footer">
              <p>Not yet an account holder?</p>
              <a href="/register" className="register-link">Register Now!</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}