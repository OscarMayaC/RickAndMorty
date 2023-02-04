import React from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { filterCards, orderCards, reset } from '../redux/actions';
import Card from './Card';
import styles from "./Fovorites.module.css";

export default function Favorites(props) {
    const dispatch = useDispatch();
    const myFavorites = useSelector((s) => s.myFavorites)

    // const characters = props.characters.filter((obj) => {
    //     for (let i = 0; i < myFavorites.length; i++) {
    //         if (myFavorites[i].id === obj.id) {
    //             return obj;
    //         }
    //     }
    // })

    function handleClick(e) {
        e.preventDefault()
        const { name, value } = e.target;
        if (name === "filter") {
            return dispatch(filterCards(value))
        }
        if (name === "order") {
            dispatch(orderCards(value))
        }

    }




    return (
        <div>
            <div>
                <select className={styles.options} name='filter' defaultValue={"Default"} onChange={handleClick}>
                    <option value="Default" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Genderless">Genderless</option>
                    <option value="unknown">unknown</option>
                </select>

                <select className={styles.options} name="order" defaultValue={"Default"} onChange={handleClick}>
                    <option value="Default" disabled>Select Order</option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>


                <button className={styles.options} onClick={() => dispatch(reset())}>
                    Remove Filters
                </button>

            </div>
            {
                myFavorites?.map((p) => {
                    return (
                        <Card
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            species={p.species}
                            gender={p.gender}
                            image={p.image}
                            onClose={() => props.onClose(p.id)}
                        />
                    )
                })
            }
        </div>);

}
