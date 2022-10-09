import { useReducer } from "react"

const ACTIONS = {
    UPDATE_KEYWORD: 'update_keyword', 
    UPDATE_RATING: 'update_rating',
    UPDATE_LANG: 'update_lang',
    RESET_FILTERS: 'reset_filters'
}

const REDUCER = (state, action) => {
    switch (action.type) {
        case ACTIONS.UPDATE_KEYWORD:
            return {
                ...state,
                keyword: action.payload,
                times: state.times + 1
            }

        case ACTIONS.UPDATE_RATING:
            return {
                ...state,
                rating: action.payload
            }

        case ACTIONS.UPDATE_LANG:
            return {
                ...state,
                lang: action.payload
            }

        case ACTIONS.RESET_FILTERS:
            return {
                ...state,
                rating: action.payload.initialRating,
                lang: action.payload.initialLang
            }

        default:
            return state
    }
}

const useForm = ({ initialKeyword = '', initialRating = 'g', initialLang = 'English (en)' } = {}) => {
    const [state, dispatch] = useReducer(REDUCER, {
        keyword: decodeURI(initialKeyword),
        times: 0,
        rating: initialRating,
        lang: initialLang
    })

    const {keyword, times, rating, lang} = state

    return {
        keyword, 
        times, 
        rating,
        lang,
        updateKeyword: keyword => 
            dispatch({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword}) ,
        updateRating: rating => 
            dispatch({ type: ACTIONS.UPDATE_RATING, payload: rating}),
        updateLang: lang => 
            dispatch({ type: ACTIONS.UPDATE_LANG, payload: lang}),
        resetFilter: (initialRating, initialLang) => 
            dispatch({ type: ACTIONS.RESET_FILTERS, payload: {initialRating, initialLang}})
    }
}
export default useForm