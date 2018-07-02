import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import JSXSintaxe from './JSXSintaxe'
import Props from './Props'
import UpdateDOM from './UpdateDOM'
import EventHandler from './EventHandler'
import Form from './Form'
import firebase from 'firebase'
import Subscriber from './Subscriber'

const title = "React"
const text = "React.."

class App extends Component {
  constructor(props){
    super(props)
    let config = {
      apiKey: "",
      authDomain: "",
      databaseURL: "",
      projectId: "",
      storageBucket: "",
      messagingSenderId: ""
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>
        <JSXSintaxe />
        <Props titulo={title} text={text}></Props>
        <Props titulo="React Native" text="React Native..."></Props>
        <div id="update"></div>
        <EventHandler />
        <Form />
       <Subscriber />
      </div>
    );
  }
}

export default App;
