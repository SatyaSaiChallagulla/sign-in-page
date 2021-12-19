import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import {FiFacebook, FiTwitter, FiGithub} from 'react-icons/fi'
import './index.css'

class SignIn extends Component {
  state = {
    userEmail: '',
    password: '',
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onClickSignUp = () => {
    const {onSign} = this.props
    onSign(false)
  }

  onChangeUserEmail = event => {
    this.setState({userEmail: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
    const {userEmail, password} = this.state
    const userDetails = {userEmail, password}
    const url = 'https://snapkaro.com/eazyrooms_staging/api/userlogin'
    const options = {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    }
  }

  renderPasswordField = () => {
    const {password} = this.state
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password*
        </label>
        <input
          type="password"
          id="password"
          className="input-field"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderUserEmailField = () => {
    const {userEmail} = this.state
    return (
      <>
        <label className="input-label" htmlFor="userEmail">
          Email Address*
        </label>
        <input
          type="email"
          id="userEmail"
          className="input-field"
          value={userEmail}
          onChange={this.onChangeUserEmail}
        />
      </>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <>
        <h1 className="signin-heading">Sign in</h1>
        <p>
          Donot have an account?
          <span>
            <button
              type="button"
              onClick={this.onClickSignUp}
              className="sign-button"
            >
              Sign up
            </button>
          </span>
          .
        </p>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUserEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>

          <p className="forgot-password-text">forgot password?</p>
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
          <p>Or continue with</p>
          <div className="icon-container">
            <div className="icons">
              <FiFacebook className="icon" />
            </div>
            <div className="icons">
              <FiTwitter className="icon" />
            </div>
            <div className="icons">
              <FiGithub className="icon" />
            </div>
          </div>
        </form>
      </>
    )
  }
}
export default SignIn
