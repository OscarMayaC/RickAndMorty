import './App.css'

import Cards from './components/Cards.jsx'
import React from 'react'
import character from './data.js'
import Nav from "./components/Nav.jsx"
import About from './components/About.jsx';
import Detail from "./components/Detail.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Form from "./components/Form.jsx";
// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Favorites from './components/Favorites'
import axios from "axios"

function App() {

  const [access, setAccess] = React.useState(false);
  const username = "access@rickandmorty.com";
  const password = "Welc0me@";
  const navigate = useNavigate();

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    } else {
      window.alert("Incorrect credentials");
      window.alert("Username: access@rickandmorty.com");
      window.alert("Password: Welc0me@")
    }
  }

  useEffect(() => {
    !access && navigate("/");
    // eslint-disable-next-line
  }, [access]);

  const location = useLocation();


  const [characters, setCharacters] = React.useState(character)

  const onSearch = async (characterId) => {
    try {
      // const result = await axios(`http://localhost:3001/rickandmorty/character/${characterId}`)
      const result = await axios(`https://rickandmortybackend-production.up.railway.app/rickandmorty/character/${characterId}`)
      const charac = result.data
      if (charac.name) {
        let exist = characters.find(e => e.id === charac.id)
        if (exist) {
          window.alert("You already added this character")
        } else { setCharacters(prevState => [...prevState, charac]) }

      } else {
        window.alert("Character not found")
      }
    } catch (error) {
      window.alert("Character not found")
    }

  }

  const onClose = (id) => {
    setCharacters((data) => {
      return data.filter(e => e.id !== id)
    })
  }



  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
        {location.pathname === "/" ? null : <Nav onSearch={onSearch} />}
      </div>
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
        <Route path='/' element={<Form login={login} />}></Route>
        <Route path='/favorites' element={<Favorites characters={characters} onClose={onClose} />}></Route>
      </Routes>

    </div>
  )
}

export default App
