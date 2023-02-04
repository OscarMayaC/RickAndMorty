import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import styles from "./Detail.module.css";

export default function Detail() {
    const { detailId } = useParams();
    const [character, setCharacter] = useState({});
    useEffect(() => {
        // fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
        fetch(`https://rickandmortybackend-production.up.railway.app/rickandmorty/detail/${detailId}`)
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
            <img className={styles.imageLogo} src={"https://occ-0-999-38.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABdlsO0LP022AtLRcPlik-5uWGqVS90oIr1Wy70ULe7-qyaW-Y3a9zUgndw6Q6KuHX2gH_Vd3Nxnl6EOU38_ep9ApNbNfn2Krr6hLj6fhs_eZ.png?r=976"} alt={"rickandmortylogo"} />
        </div>
    )
}


// Name
// Status
// Specie
// Gender
// Origin
// Image