import {Component} from 'react'
import SignIn from '../SignIn'
import SignUp from '../SignUp'
import './index.css'

class Login extends Component {
  state = {
    isSignInActive: true,
  }

  onSign = value => {
    this.setState({isSignInActive: value})
  }

  render() {
    const {isSignInActive} = this.state
    return (
      <div className="log-in-container">
        <div className="community-container">
          <h1 className="community-heading">Welcome to our community</h1>
          <p className="community-description">
            Fuse help developers to build organized and well coded dashboards
            full of beautiful and rich modules. Join us and start building your
            application today.
          </p>
          <p className="community-description">
            More than 17k people joined us, it your turn.
          </p>
        </div>

        <div className="sign-container">
          {isSignInActive ? (
            <SignIn onSign={this.onSign} />
          ) : (
            <SignUp onSign={this.onSign} />
          )}
        </div>
      </div>
    )
  }
}
export default Login
