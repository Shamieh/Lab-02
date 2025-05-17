import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './components/Navbar1';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from 'axios';
import { Card } from 'react-bootstrap';
import MovieCard from './components/MovieCard';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';




function App() {



  return (
    <>
      
    
      <Router>
      <Navbar1/>
      <br />
        <Routes>
          <Route path='/' element={<Home/>} />

          <Route path='/movies' element={<MovieCard/>} />

          <Route path='/movies/:id' element={<MovieDetails />} />
        </Routes>

      <Footer/>
      </Router>
      

    </>
  )
}


export default App
