import axios from "api/axios";

const signUpService = async ({ name, lastName, email, password }) => {
    
    try {
        const response = await axios.post('/signUpUser', {
            name,
            lastName,
            email,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.statusText){
            console.log(response)
            const {message} = response.data
            return message
        }
    } catch(e) {
        throw new Error(e.response.data.message)
    }
    
}
export default signUpService