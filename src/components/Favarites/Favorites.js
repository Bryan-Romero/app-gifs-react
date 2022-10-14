import Like from 'components/Icons/Like'
import NotLike from 'components/Icons/NotLike'
import useUser from 'hooks/useUser'
import React, { useEffect } from 'react'
import { useLocation } from 'wouter'
import './Favorites.css'

const Favorites = ({idGif}) => {

    const {isLogged, addFav, favs, deleteFav} = useUser()
    const [, navigate] = useLocation()
    
    const listFavs = favs.data !== undefined ? favs.data.map(objGif => objGif.idGif) : []
    
    const isFav = listFavs.some(favId => favId === idGif)

    const handleClick = (e) => {
        e.preventDefault()
        if(!isLogged) return navigate('/login')
        if(!isFav){ 
            addFav({ idGif })
        } else {
            deleteFav({ idGif })
        }
    }

    return (
        <button className='button-fav' onClick={handleClick}>
            <span className='lavel-fav' aria-level='Fav Gif' role='img'>
                {
                    isFav ? <Like /> : <NotLike />
                }
            </span>
        </button>
    )
}

export default Favorites