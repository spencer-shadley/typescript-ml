import * as React from 'react';
import './App.css';

import logo from './logo.svg';

class ReactTemplate extends React.Component {
  public render() {
    return (
      <div className="ReactTemplate">
        <header className="ReactTemplate-header">
          <img src={logo} className="ReactTemplate-logo" alt="logo" />
          <h1 className="ReactTemplate-title">Welcome to React</h1>
        </header>
        <p className="ReactTemplate-intro">
          Hot loading!
        </p>
      </div>
    );
  }
}

export default ReactTemplate;
