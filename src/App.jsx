import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Characters from './components/pages/characters'
import Character from './components/pages/character'
import CharacterCreation from './components/pages/character-creation'

function App() {
  return <Router>
    <Switch>
      <Route path='/character/:name/gear' component={Gear}/>
      <Route path='/character/:name/moves' component={Moves}/>
      <Route path='/character/:name' component={Character}/>
      <Route path='/new' component={CharacterCreation}/>
      <Route path='/' component={Characters}/>
    </Switch>
  </Router>
}

export default App;
