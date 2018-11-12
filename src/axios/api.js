
import axios from './http'

const login = () => axios.get(`/user`);
     
const detail = () => axios.post(`/detail`);


export default {    
                                                   
    login,
    detail                             
                                            
};