import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class Sidebar extends Component{
  render(){
    return(
      <div className="col-3 pl-0">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <Link className="nav-link active" to="/" role="tab">Home</Link>
          <Link className="nav-link" to="/curriculo" role="tab">Curriculo</Link>
          <Link className="nav-link" to="/artigos" role="tab">Artigos</Link>
        </div>
      </div>
    )
  }
}