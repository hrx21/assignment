import { useRef, useState, useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from '../context/AuthProvider'
import axios from '../api/axios'

const LOGIN_URL = '/auth/login';

const Login = () => {

  const {setAuth} = useContext(AuthContext)

    const userRef = useRef()
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [admin, setAdmin] = useState(false)
    
    const handleSubmit = async (e) => {
      e.preventDefault()
      try {
          const response = await axios.post(LOGIN_URL, JSON.stringify({email, password}),
          {
              headers: {"Content-Type": 'application/json'},
              withCredentials: true,
          }
      )
      console.log(JSON.stringify(response?.data))
      const token = response.data.token
          setAuth({email, password, token})
          setEmail('')
          setPassword('')
          setAdmin(true)
      } catch (err) {
          if (!err.response) {
              setError('No Response')
          } else if(err.response.data === 400){
              setError('Email or Password Missing!')
          } else{
              setError('login failed')
          }
      }
  }

  useEffect(() => {
    setError('')
}, [email, password])


    return (
     <>
     {
      admin ? (
        <Navigate replace to='/admin' />
      ): (
      <div class="container">
        <div class="login__content">
          <img src="https://assets.codepen.io/7773162/4kNYC.jpeg" alt="" class="login__img"/>

          <form onSubmit={handleSubmit} class="login__form">
            <div>
            <h1 class="login__title">
              <span>Admin</span> Login
            </h1>
            <p class="login__description">
              Welcome Back! Please login to continue.
            </p>
          </div>

            <div>
              <div class="login__inputs">
                <div>
                  <label class="login__label">Email</label>
                  <input type="email"
                   placeholder="Enter your email address"
                   required class="login__input"
                   value={email}
                   onChange={(e) => setEmail(e.target.value)}
                   ref={userRef}
                    />
                </div>

                <div>
                  <label class="login__label">Password</label>
                  <div class="login__box">
                  <input type="password"
                   placeholder="Enter your password"
                   required class="login__input"
                   id="input-pass"
                   value={password}
                   ref={userRef}
                   onChange={(e) => setPassword(e.target.value)}
                  />
                  <i class="ri-eye-off-line login__eye" id="input-icon"></i>
                </div>
              </div>
            </div>

          </div>

          <div>
            <div class="login__buttons">
              <button class="login__button">Log In</button>
            </div>
            </div>
          </form>
         </div>
       </div>
      )}
     </>
  )
}


export default Login