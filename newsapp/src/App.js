// import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// class base component korbo

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
// import { Route, Router,Switch } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,


} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {

  pageSize = 5;

  state={
    progress:0
  }

  setProgress = (progress)=>{
    this.state({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar/>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            // onLoaderFinished={() => setProgress(0)}
          />
          <Switch>
            <Route exact path="/"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
            <Route exact path="/business"><News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="in" category="business"/></Route>
            <Route exact path="/entertainment"><News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="in" category="entertainment"/></Route>
            <Route exact path="/general"><News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
            <Route exact path="/health"><News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="in" category="health"/></Route>
            <Route exact path="/science"><News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="in" category="science"/></Route>
            <Route exact path="/sports"><News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="in" category="sports"/></Route>
            <Route exact path="/technology"><News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="in" category="technology"/></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
