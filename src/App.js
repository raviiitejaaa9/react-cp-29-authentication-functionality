import {Redirect, Switch, Route} from 'react-router-dom'

import ProtectedRouter from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <>
    <Switch>
      <Route exact path="/login" component={Login} />
      <ProtectedRouter exact path="/" component={Home} />
      <ProtectedRouter exact path="/about" component={About} />
      <Route exact path="/bad-path" component={NotFound} />
      <Redirect to="/bad-path" />
    </Switch>
  </>
)

export default App
