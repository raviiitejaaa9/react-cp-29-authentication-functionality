// Write your JS code here
import Cookies from 'js-cookie'
// import {Fragment} from 'react'
import {Redirect} from 'react-router-dom'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

import './index.css'

const About = () => {
  const jwtToken = Cookies.get('jwt_token')
  console.log(jwtToken)
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="any-container">
        <h1 className="not-found"> About Route </h1>
        <LogoutButton />
      </div>
    </>
  )
}

export default About
