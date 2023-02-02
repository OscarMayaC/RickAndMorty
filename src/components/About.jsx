
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
        has been created with JavaScript, React, Redux, pure CSS, Node.js and Express.
      </h2>
      <a href="https://www.linkedin.com/in/oscarmayacuellar/">
        <img className={styles.linkedin} src='https://cdn-icons-png.flaticon.com/512/174/174857.png' alt='linkedin logo'></img>
      </a>
      <a href="https://github.com/OscarMayaC">
        <img className={styles.github} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="github logo" />
      </a>
    </div>
  )
}

