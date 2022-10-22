import axios from "api/axios";

const addFavGifService = ({ idGif, jwt }) => {
    return new Promise( response => {
        axios.post('/addFavGif', {
            idGif,
        },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        })
        .then(res => {
            const gifs = res.data
            return response(gifs)
        })
        .catch(error => {
            if(!error.response.data.message){
                throw response(new Error(error))
            }
            throw response(new Error(error.response.data.message))
        })
    })
}
export default addFavGifService