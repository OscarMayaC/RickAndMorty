import styles from "./Card.module.css";




export default function Card(props) {
   //console.log("this is props", props)
   return (
      <div className={styles.divCard}>
         {/* <div> */}
            <button className={styles.button} onClick={props.onClose}>X</button>
         {/* </div> */}

         <img src={props.image} alt={props.image} />
         <h2 className={styles.characterDetails}>{props.name}</h2>
         <h3 className={styles.characterDetails}>Species: {props.species}</h3>
         <h3 className={styles.characterDetails}>Gender: {props.gender}</h3>

      </div>
   );
}
