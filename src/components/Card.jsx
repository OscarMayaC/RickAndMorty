import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../redux/actions";
import { useEffect } from "react";




export default function Card(props) {
   //console.log("this is props", props)
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch();
   const myFavorites = useSelector((st) => st.myFavorites)

   function handleFavorite(ch) {
      if (isFav === true) {
         setIsFav(false)
         dispatch(deleteFavorites(ch.id))
      } else {
         setIsFav(true)
         dispatch(addFavorites(ch))
      }
   }

   useEffect(() => {
      myFavorites.forEach((ch) => {
         if (ch.id === props.id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);


   return (

      <div className={styles.divCard}>

         {
            isFav ? (
               <button className={styles.favoriteButton} onClick={()=>handleFavorite(props)}>❤️</button>
            ) : (
               <button className={styles.favoriteButton} onClick={()=>handleFavorite(props)}>🤍</button>
            )
         }

         <button className={styles.button} onClick={props.onClose}>X</button>

         <Link to={`/detail/${props.id}`}>
            <img className={styles.image} src={props.image} alt={props.image} />

            <h2 className={styles.characterDetails}>{props.name}</h2>

            <h3 className={styles.characterDetails}>Species: {props.species}</h3>
            <h3 className={styles.characterDetails}>Gender: {props.gender}</h3>
         </Link>
      </div>


   );
}
