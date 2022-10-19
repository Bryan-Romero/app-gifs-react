import { useCallback, useContext, useState } from "react";
import Context from "context/UserContext";
import signInService from "services/signInService";
import addFavGifService from "services/addFavGifService";
import getFavGifService from "services/getFavsGifsService";
import deleteFavGifService from "services/deleteFavGifService";
import signUpService from "services/signUpService";

export default function useUser () {
    const {jwt, setJWT, favs, setFavs} = useContext(Context)
    const [state, setState] = useState({
        loading: false,
        error: false,
        register: ''
    })

    const login = useCallback(async({ email, password }) => {
        setState({ loading: true, error: false })
        try{
            const token = await signInService({ email, password })
            window.sessionStorage.setItem('jwt', token)
            setState({ loading: false, error: false })
            setJWT(token)
        }catch(e){
            window.sessionStorage.removeItem('jwt')
            setState({ loading: false, error: true })
            setJWT(null)
            throw new Error(e.message)
        }
    }, [setJWT])

    const register = useCallback(async({ name, lastName, email, password }) => {
        setState({ loading: true, error: false })
        
        try{
            const register = await signUpService({ name, lastName, email, password })
            setState({ loading: false, error: false , register})
        }catch(e){
            setState({ loading: false, error: true, register: '' })
            throw new Error(e.message)
        }
    }, [])

    const addFav = useCallback(async ({ idGif }) => {
        try{
            const gifs = await addFavGifService({ idGif, jwt })
            setFavs(gifs)
        }catch(e){
            setFavs([])
        }
    }, [])

    const deleteFav = useCallback(async ({ idGif }) => {
        try{
            const gifs = await deleteFavGifService({ idGif, jwt })
            setFavs(gifs)
        }catch(e){
            setFavs([])
        }
    }, [])

    const logOut = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isRegister: Boolean(state.register),
        isLoading: state.loading,
        hasError: state.error,
        login,
        logOut,
        addFav,
        favs,
        deleteFav,
        register
    }
}