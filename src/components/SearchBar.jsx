import React from "react";
import styles from "./SearchBar.module.css";




export default function SearchBar(props) {
   //console.log("onsearch", props)
   const [id, setId] = React.useState("")
   const handleChange = e => {
      setId(e.target.value)
   }
   return (
      <div className={styles.wrap}>
   <div className={styles.search}>
      <input placeholder="Enter an ID between 1 and 826" type="search" className={styles.searchTerm} id="" onChange={handleChange}/>
      <button className={styles.searchButton} onClick={() => props.onSearch(id)}>ADD
        <i className={styles.fafa}></i>
     </button>
   </div>
</div>
   );
}
