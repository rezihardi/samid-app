import React from 'react'
// import logo from './logo.svg';
import './App.css';
import logoWoy from './123.jpeg'

class HelloMessage extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      umurPT: 12
    }
  }

  tick = () => {
    this.setState({
      umurPT: this.state.umurPT + 1
    });
  }

  thin = () => {
    this.setState({
      umurPT: this.state.umurPT - 1
    });
  }

  

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>PT SAMID UWUUW</h1>
        <h2>Didirikan Sejak {this.state.umurPT} tahun yang lalu</h2>
        <button onClick={() => this.tick()}>nambah umur PT</button>
        <button onClick={() => this.thin()}>ngurang umut PT</button>
        {this.state.umurPT === 15 ? (<p>gambar hilang :p</p>) : (<img src={logoWoy} alt="logo" />)} 
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    );
  }
}

export default HelloMessage;
