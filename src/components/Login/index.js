// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSubmitSuccess = jwtToken => {
    // console.log(jwtToken, 'triggered')
    Cookies.set('jwt_token', jwtToken, {expires: 4})
    const {history} = this.props
    console.log(this.props)
    history.replace('/')
  }

  OnSubmitFailure = errorMsg => {
    console.log(errorMsg)
  }

  onClickLogin = async () => {
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <h1 className="not-found"> Please Login </h1>
        <button className="login-btn" onClick={this.onClickLogin} type="button">
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
