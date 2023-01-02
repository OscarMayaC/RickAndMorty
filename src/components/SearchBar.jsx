import styles from "./SearchBar.module.css";




export default function SearchBar(props) {
   //console.log("onsearch", props)
   return (
      <div className={styles.wrap}>
   <div className={styles.search}>
      <input type="search" className={styles.searchTerm}/>
      <button className={styles.searchButton} onClick={() => props.onSearch("id no encontrado")}>Buscar
        <i className={styles.fafa}></i>
     </button>
   </div>
</div>
   );
}
