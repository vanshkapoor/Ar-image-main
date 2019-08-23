import axios from 'axios';

const setAuthToken = token =>{
    if(token)
    {
        axios.defaults.headers.common['Authorization'] = token;
        // axios.defaults.headers.common['Content-Type'] = "application/json";
        console.log(token);
    }
    // else{
    //     delete axios.defaults.headers.common['Authorization'];

    // }
};

export default setAuthToken;
