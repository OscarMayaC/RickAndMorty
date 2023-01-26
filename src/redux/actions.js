import axios from "axios"


export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const RESET = "RESET"



export function addFavorites(ch) {

    return async function (dispatch) {
        try {
            const character = await axios.post(`http://localhost:3001/rickandmorty/fav`, ch)

            dispatch({
                type: ADD_FAVORITE,
                payload: character.data
            })

        } catch (error) {
            console.log(error)
        }
    }



}

export function deleteFavorites(id) {
    return async function (dispatch) {
        try {
            const character = await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)

            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
        } catch (error) {
            console.log(error)
        }

    }
}

export function filterCards(status) {
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id) {
    return {
        type: ORDER,
        payload: id
    }
}

export function reset() {
    return {
        type: RESET,
    }
}