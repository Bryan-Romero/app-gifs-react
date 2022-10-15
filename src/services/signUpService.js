import axios from "api/axios";

const signUpService = async ({ name, lastName, email, password }) => {
    console.log('signup')
    try {
        await axios.post('/signUpUser', {
            name,
            lastName,
            email,
            password
        },
        {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return true
        })
    } catch(e) {
        console.log(e.message)
        throw new Error(e.response.data.message)
    }
    
}
export default signUpService