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
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const location = useLocation();


  const [characters, setCharacters] = React.useState(character)

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(r => r.json())
      .then(data => {
        if (data.name) {
          let exist = characters.find(e => e.id === data.id)
          if (exist) {
            window.alert("You already added this character")
          } else { setCharacters(prevState => [...prevState, data]) }

        } else {
          window.alert("Character not found")
        }
      })
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
