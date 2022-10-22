import Like from 'components/Icons/Like'
import NotLike from 'components/Icons/NotLike'
import useUser from 'hooks/useUser'
import React, { useState } from 'react'
import Modal from 'components/Modal/Modal'
import './Favorites.css'
import SignIn from 'components/SignIn/SignIn'

const Favorites = ({idGif}) => {

    const {isLogged, addFav, favs, deleteFav, isLoading} = useUser()
    const [showModal, setShowodal] = useState(false)
    
    const listFavs = favs.data !== undefined ? favs.data.map(objGif => objGif.idGif) : []
    
    const isFav = listFavs.some(favId => favId === idGif)

    const handleClick = (e) => {
        e.preventDefault()
        if(!isLogged) return setShowodal(true)
        if(!isFav){ 
            addFav({ idGif })
        } else {
            deleteFav({ idGif })
        }
    }

    const handleCloseModal = () => {
        setShowodal(false)
    }

    const handleLogin = () => {
        setShowodal(false)
    }

    return (
        <>
            <button className='button-fav' onClick={handleClick} disabled={isLoading}>
                <span className='lavel-fav'>
                    {
                        isFav ? <Like /> : <NotLike />
                    }
                </span>
            </button>
            {showModal && 
                <Modal onClose={handleCloseModal}>
                    <SignIn onLogin={handleLogin} />
                </Modal>
            }
        </>
    )
}

export default Favorites