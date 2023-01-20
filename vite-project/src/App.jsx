
import Home from "./Home"
import Tech from "./Tech"
import Portfolio from "./Portfolio"
import Process from "./Process"
import Contact from "./Contact"
import { Route, Switch } from "react-router-dom"


function App() {

  return (
    <div className="App bg-black font-pry grid">

      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/tech'>
          <Tech/>
        </Route>
        <Route path='/portfolio'>
          <Portfolio/>
        </Route>
        <Route path='/process'>
          <Process/>
        </Route>
        <Route path='/contact'>
          <Contact/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
