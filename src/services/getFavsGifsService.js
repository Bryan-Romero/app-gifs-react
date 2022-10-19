import axios from "api/axios";

const getFavGifService = async ({ jwt }) => {
    return new Promise( response => {
        try {
            axios.get('/getFavGifs',
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
        } catch(e) {
            throw new Error('Error: ' + e)
        }
    })
}
export default getFavGifService