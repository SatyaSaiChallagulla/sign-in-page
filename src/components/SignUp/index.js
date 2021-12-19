import {Component} from 'react'
import './index.css'

class SignUp extends Component {
  state = {
    username: '',
    userEmail: '',
    password: '',
    mobileNo: '',
  }

  onClickSignIn = () => {
    const {onSign} = this.props
    onSign(true)
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangeUserEmail = event => {
    this.setState({userEmail: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  submitForm = async event => {
    event.preventDefault()
  }

  renderContactField = () => {
    const {mobileNo} = this.state
    return (
      <>
        <label className="input-label" htmlFor="mobileNo">
          Mobile No
        </label>
        <input
          type="text"
          id="mobileNo"
          className="input-field"
          value={mobileNo}
          onChange={this.onChangeMobileNo}
        />
      </>
    )
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

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="input-field"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  render() {
    return (
      <>
        <h1 className="sign-heading">Sign up</h1>
        <p>
          Already have an account?
          <span>
            <button
              type="button"
              onClick={this.onClickSignIn}
              className="sign-button"
            >
              Sign up
            </button>
          </span>
          .
        </p>
        <form className="form-container" onSubmit={this.submitForm}>
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderUserEmailField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">{this.renderContactField()}</div>
          <div className="terms-container">
            <input type="checkbox" className="terms-checkbox" />
            <p className="terms-description">
              I agree to the
              <span className="terms-text">Terms of Service</span> and
              <span className="terms-text">Privacy Policy</span>.
            </p>
          </div>
          <button type="submit" className="register-button">
            Create Your Free Account
          </button>
        </form>
      </>
    )
  }
}
export default SignUp
