
export const ADD_FAVORITE = "ADD_FAVORITE";
export const DELETE_FAVORITE = "DELETE_FAVORITE";
export const FILTER = "FILTER"
export const ORDER = "ORDER"
export const RESET = "RESET"



export function addFavorites(ch) {
    return {
        type: ADD_FAVORITE,
        payload: ch
    }
}

export function deleteFavorites(id) {
    return {
        type: DELETE_FAVORITE,
        payload: id
    }
}

export function filterCards(status){
    return {
        type: FILTER,
        payload: status
    }
}

export function orderCards(id){
    return {
        type: ORDER,
        payload: id
    }
}

export function reset(){
    return {
        type: RESET,
    }
}