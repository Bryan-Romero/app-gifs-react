import axios from "api/axios";

const getFavGifService = async ({ jwt }) => {
    try {
        const response = await axios.get('/getFavGifs',
        {
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
export default getFavGifService