import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Curriculo from './components/Curriculo';
import Artigos from './components/Artigos';

function App() {
  return (
    <Router>
      <div className="row">
        <Sidebar/>
        <Route exact path="/" component={Home}/>
        <Route path="/curriculo" component={Curriculo}/>
        <Route path="/artigos" component={Artigos}/>
      </div>
    </Router>
  );
}

export default App;
