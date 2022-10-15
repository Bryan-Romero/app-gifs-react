import axios from "api/axios";

const deleteFavGifService = async ({ idGif, jwt }) => {

    try {
        const response = await axios.delete('/deleteFavGif', {
            data:{
                idGif,
            },
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwt}`
            }
        });
        if(response.statusText){
            const gifs = response.data
            return gifs
        }
    } catch(e) {
        throw new Error('Error: ' + e)
    }
    
}
export default deleteFavGifService