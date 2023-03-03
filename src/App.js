// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { read, utils } from 'xlsx';
import readXlsxFile from 'read-excel-file'
import Main from './components/Main'

function App() {

  return (
    <div className="App">
      <div class="nav-header">
        <div class="nav-title">
          JoGeek
        </div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank" rel="noreferrer">Home</a>
        <a href="//github.io/jo_geek" target="_blank" rel="noreferrer">Presentation</a>
        <a href="http://stackoverflow.com/users/4084003/" target="_blank" rel="noreferrer">About Us</a>
      </div>
      <Main />
    </div>
  );
}

export default App;
