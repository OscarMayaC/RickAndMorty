import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER, RESET } from "./actions";

const initialState = {
    myFavorites: [],
    myFavoritesOrigin: []
}

//se usa directamente TYPE y PAYLOAd porque se hace destructuring de ACTIONS,
//sin destructuring debe usarse como actions.type || actions.payload

export default function rootReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_FAVORITE:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin, payload],
                myFavoritesOrigin: [...state.myFavoritesOrigin, payload]
            }

        case DELETE_FAVORITE:
            const filtered = state.myFavorites.filter((ch) => {
                return ch.id !== payload
            })
            return {
                ...state,
                myFavorites: filtered,
                myFavoritesOrigin: filtered
            }

        case FILTER:
            const filterCopy = [...state.myFavoritesOrigin]
            const filter = filterCopy.filter((ch) => ch.gender === payload)
            return {
                ...state,
                myFavorites: filter
            }

        case ORDER:
            const orderCopy = [...state.myFavoritesOrigin]
            const order = orderCopy.sort((a, b) => {
                if (a.id > b.id) {
                    return "Ascendente" === payload ? 1 : -1
                }
                if (a.id < b.id) {
                    return "Descendente" === payload ? 1 : -1
                }
                return 0
            })
            return {
                ...state,
                myFavorites: order
            }

            case RESET:
            return {
                ...state,
                myFavorites: [...state.myFavoritesOrigin]
            }

        default:
            return state
    }
}


