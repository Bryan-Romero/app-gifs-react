import axios from "api/axios";

const signInService = async ({email, password}) => {
    try {
        await axios.post('/signInUser', {
            email,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            const {token} = res.data
            return token
        })
    } catch(e) {
        console.log(e.message)
        // e.response.data.message
        throw new Error(e.message)
    }
    
}
export default signInService