
import React from 'react'
import DeveloperPhoto from "./TheDeveloper.jpg";

export default function About() {
  return (
    <div>
        <img src={DeveloperPhoto} alt="" />
        <h1>The Developer</h1>
        <h2>Esta app ha sido creada por Oscar Maya, estudiante de la carrera
            Full Stack Web Developer en Henry.
        </h2>
        
    </div>
  )
}

