// Importing modules
import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import { read, utils } from 'xlsx';
import readXlsxFile from 'read-excel-file'
import Main from './components/Main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';



function App() {

  return (
    <div className="App">
      <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
        crossorigin></script>

      <script
        src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
        crossorigin></script>

      <script>var Alert = ReactBootstrap.Alert;</script>

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />

      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="veritas_logo.png"
              width="110"
              height="30"
              className="d-inline-block align-top"
              alt="Veritas logo"
            />{' '}
            <span className="white-text">SMART RECRUITMENT ASSISTANT</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <Main />
      </Container>
    </div>
  );
}

export default App;
