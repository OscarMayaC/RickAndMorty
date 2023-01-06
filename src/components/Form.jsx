
import React from 'react'
import { useState } from 'react';
import styles from "./Form.module.css";
import validate from './Validate.js';


export default function Form(props) {

    const [userData, setUserData] = useState({
        username: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        username: "",
        password: ""
    })

    function handleInputChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validate({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.login(userData)
    }

    return (
        <div className={styles.div}>
            <form onSubmit={((e) => {
                handleSubmit(e)
            })} className={styles.form} >
                <div>
                    <label className={styles.label} htmlFor="">
                        Username
                    </label>
                    <input className={styles.input} onChange={(event) => handleInputChange(event)} name="username" placeholder='Enter your username' type="text" />
                    <p>{errors.username}</p>
                    <label className={styles.label} htmlFor="">
                        Password
                    </label>
                    <input className={styles.input} onChange={(event) => handleInputChange(event)} name="password" placeholder='Enter your password' type="password" />
                    <p>{errors.password}</p>

                    <button className={styles.button} type='submit'>
                        Log In
                    </button>
                </div>
            </form>
        </div>
    )
}




