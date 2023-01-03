import SearchBar from './SearchBar.jsx';
import React from 'react';
import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

export default function Nav(props) {

    return (
        <div className={styles.nav}>
            <ul className={styles.navBotones}>
                <button className={styles.navButtons}>
                    <Link to="/home">
                        Home
                    </Link>
                </button>
                <button className={styles.navButtons}>
                    <Link to="/about">
                        About
                    </Link>
                </button>
            </ul>
            <div className={styles.navheader}>
                <div className={styles.navtitle}>Rick & Morty App </div>

                <SearchBar onSearch={props.onSearch} />
            </div>
        </div>
    )
}


