
import axios from './http'

const login = () => axios.post(`/user`);
     
const detail = () => axios.post(`/detail`);


export default {    
                                                   
    login,
    detail                             
                                            
};