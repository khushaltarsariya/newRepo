import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Contact from './component/Contact'
import Cards from './component/Cards';
import Footer from './component/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/cards' element={<Cards/>}></Route>
        </Routes>
        <Footer/>
    </Router>
  );
}

export default App 
