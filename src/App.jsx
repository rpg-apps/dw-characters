import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './components/pages/login'
import Home from './components/pages/home'
import New from './components/pages/new'
import Character from './components/pages/character'

import { loggedIn } from './logic/login'

function App() {
  if (!loggedIn()) {
    return <Login />
  }

  return <Router>
    <Switch>
      <Route path='/character/:name' component={Character}/>
      <Route path='/new' component={New}/>
      <Route path='/' component={Index}/>
    </Switch>
  </Router>
}

export default App;
