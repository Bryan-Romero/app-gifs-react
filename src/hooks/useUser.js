import { useCallback, useContext, useState } from "react";
import Context from "context/UserContext";
import signInService from "services/signInService";
import addFavGifService from "services/addFavGifService";
import getFavGifService from "services/getFavsGifsService";
import deleteFavGifService from "services/deleteFavGifService";

export default function useUser () {
    const {jwt, setJWT, favs, setFavs} = useContext(Context)
    const [state, setState] = useState({
        loading: false,
        error: false
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
            console.log(e)
        }
    }, [setJWT])

    const addFav = useCallback(async ({ idGif }) => {
        try{
            const gifs = await addFavGifService({ idGif, jwt })
            setFavs(gifs)
        }catch(e){
            setFavs([])
            console.log(e)
        }
    }, [])

    const deleteFav = useCallback(async ({ idGif }) => {
        try{
            const gifs = await deleteFavGifService({ idGif, jwt })
            setFavs(gifs)
        }catch(e){
            setFavs([])
            console.log(e)
        }
    }, [])

    // const getFavs = useCallback(async () => {
    //     try{
    //         const gifs = await getFavGifService({ jwt })
    //         setFavs(gifs)
    //     }catch(e){
    //         setFavs([])
    //         console.log(e)
    //     }
    // }, [])

    const logOut = useCallback(() => {
        window.sessionStorage.removeItem('jwt')
        setJWT(null)
    }, [setJWT])

    return {
        isLogged: Boolean(jwt),
        isLoginLoading: state.loading,
        hasLoadingError: state.error,
        login,
        logOut,
        addFav,
        favs,
        deleteFav
    }
}