import './App.css'

import Cards from './components/Cards.jsx'
import React from 'react'
import character from './data.js'
import Nav from "./components/Nav.jsx"
import About from './components/About.jsx';
import Detail from "./components/Detail.jsx";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";


function App() {

  const [characters, setCharacters] = React.useState(character)

  const onSearch = (characterId) => {
    fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
      .then(r => r.json())
      .then(data => {
        if (data.name) {
          let exist = characters.find(e => e.id === data.id)
          if (exist) {
            window.alert("Ya agregaste este personaje")
          } else { setCharacters(prevState => [...prevState, data]) }

        } else {
          window.alert("No se encontro el personaje")
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
        <Nav onSearch={onSearch} />
      </div>
      <Routes>
        <Route path='/about' element={<About />} />
        {/* <Route path='/nav' element={<Nav />} /> */}
        <Route path='/detail/:detailId' element={<Detail />} />
        <Route path='/home' element={<Cards characters={characters} onClose={onClose} />} />
      </Routes>

    </div>
  )
}

export default App
