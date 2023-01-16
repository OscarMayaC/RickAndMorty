
import React from 'react'
import DeveloperPhoto from "./TheDeveloper.jpg";
import styles from "./About.module.css"

export default function About() {
  return (
    <div className={styles.div}>
        <img src={DeveloperPhoto} alt="DeveloperPhoto" className={styles.image} />
        <h1>The Developer</h1>
        <h2>
        Thanks for being here! My name is Oscar Maya, 
        I am a Mexican Full Stack Web Developer, this App 
        has been created with Javascript, React, Redux and pure CSS. 
        </h2>
        
    </div>
  )
}

