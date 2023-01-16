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
                        HOME
                    </Link>
                </button>
                <button className={styles.navButtons}>
                    <Link to="/favorites">
                        FAVORITES
                    </Link>
                </button>
                <button className={styles.navButtons}>
                    <Link to="/about">
                        ABOUT
                    </Link>
                </button>

                <button className={styles.navButtons}>
                    <Link to="/">
                        LOG OUT
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


