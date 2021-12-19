import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRoute exact path="/" component={Home} />

      <Redirect to="/not-found" />
    </Switch>
  </BrowserRouter>
)

export default App
