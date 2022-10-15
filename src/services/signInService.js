import axios from "api/axios";

const signInService = async ({email, password}) => {
    try {
        const response = await axios.post('/signInUser', {
            email,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.statusText){
            const {token} = response.data
            return token
        }
    } catch(e) {
        throw new Error(e.response.data.message)
    }
    
}
export default signInService