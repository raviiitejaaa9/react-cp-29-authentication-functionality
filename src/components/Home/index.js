// Write your JS code here
// import {Fragment} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="any-container">
        <h1 className="not-found"> Home Route </h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default Home
