import React from 'react';
import './css/pure-min.css';
import './css/side-menu.css';

function App() {
  return (
    <div id="layout">
      <a href="#menu" id="menuLink" className="menu-link">
        <span></span>
      </a>

      <div id="menu">
        <div className="pure-menu">
          <a className="pure-menu-heading" href="">Company</a>

          <ul className="pure-menu-list">
              <li className="pure-menu-item"><a href="" className="pure-menu-link">Sobre mim</a></li>
              <li className="pure-menu-item"><a href="" className="pure-menu-link">Currículo</a></li>
              <li className="pure-menu-item"><a href="" className="pure-menu-link">Artigos</a></li>
          </ul>
        </div>
      </div>

      <div id="main">
        <div className="header">
            <h1>Home</h1>
            <h2>Bem vindo a aplicação</h2>
        </div>

        <div className="content">
          <h2 class="content-subhead">How to use this layout</h2>
            <p>
                To use this layout, you can just copy paste the HTML, along with the CSS in <a href="/css/layouts/side-menu.css" alt="Side Menu CSS">side-menu.css</a>, and the JavaScript in <a href="/js/ui.js">ui.js</a>. The JS file uses vanilla JavaScript to simply toggle an <code>active</code> class that makes the menu responsive.
            </p>

            <h2 class="content-subhead">Now Let's Speak Some Latin</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <h2 class="content-subhead">Try Resizing your Browser</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>  
      </div>
    </div>
  );
}

export default App;
