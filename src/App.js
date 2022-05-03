import './App.css';

import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/*import LoadingBar from 'react-top-loading-bar'*/

const App = () => {
  const pageSize = 5;
  const apiKey = process.env.REACT_APP_NEWS_API
  /*const [progress, setProgress] = useState(0)*/

  return (
    <div>
      <Router>
        <Navbar />
        {/*<LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
    />*/}
        <Switch>
          <Route exact path="/"><News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/business"><News key="business" apiKey={apiKey} pageSize={pageSize} country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News key="entertainment" apiKey={apiKey} pageSize={pageSize} country="in" category="entertainment" /></Route>
          <Route exact path="/general"><News key="general" apiKey={apiKey} pageSize={pageSize} country="in" category="general" /></Route>
          <Route exact path="/health"><News key="health" apiKey={apiKey} pageSize={pageSize} country="in" category="health" /></Route>
          <Route exact path="/science"><News key="science" apiKey={apiKey} pageSize={pageSize} country="in" category="science" /></Route>
          <Route exact path="/sports"><News key="sports" apiKey={apiKey} pageSize={pageSize} country="in" category="sports" /></Route>
          <Route exact path="/technology"><News key="technology" apiKey={apiKey} pageSize={pageSize} country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )

}

export default App;