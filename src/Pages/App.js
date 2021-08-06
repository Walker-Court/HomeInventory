import React from 'react'
import { BrowserRouter as Router ,Switch,Route} from 'react-router-dom'
import HomeInventory from './HomeInventory'
import Admin from './Admin'
import Login from './Login'

export default function App() {
    return (
    <Router>
        <Switch>
        <Route exact path="/">
          <Login />
        </Route>
          <Route path="/Admin">
            <Admin />
          </Route>
          <Route path="/HomeInventory">
            <HomeInventory />
          </Route>          
        </Switch>
    </Router>  
    );
}
