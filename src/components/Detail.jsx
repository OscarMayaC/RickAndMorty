import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import styles from "./Detail.module.css";

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert("No hay personajes con ese ID");
                }
            })
            .catch((err) => {
                window.alert("No hay personajes con ese ID");
            });
        return setCharacter({});
    }, [detailId]);

    return (
        <div>
            {/* {console.log("propiedades", character)} */}
            <div className={styles.detailsCharacter}>
                <h1>Name: {character.name}</h1>
                <h2>Status: {character.status}</h2>
                <h2>Specie: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2>
            </div>
            <img className={styles.image} src={character.image} alt={character.name} />
        </div>
    )
}


// Name
// Status
// Specie
// Gender
// Origin
// Image