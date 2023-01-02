import SearchBar from './SearchBar.jsx';
import React from 'react';
import styles from "./Nav.module.css";

export default function Nav() {
    function onSearch(id){
        
    }
    return (
        <div className={styles.nav}>
            <div className={styles.navheader}>
                <div className={styles.navtitle}>Rick & Morty App</div>
                <SearchBar
                    onSearch={(characterID) => window.alert(characterID)} />
            </div>
        </div>
    )
}


