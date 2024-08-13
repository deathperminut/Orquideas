import axios from "axios";
import { environment } from "../../environments/environments";


const RegisterUser=async (body)=>{
    
    const path  = environment.api + environment.register;

    return await axios.post(path,body);

}


const LoginUser=async (body)=>{
    
    const path  = environment.api + environment.login;
    return await axios.post(path,body);

}


const GetUser=async ()=>{
    
    const path  = environment.api + environment.getUser;

    return await axios.get(path);
}

const GetSpecificUser=async(idUser)=>{
    const path =  environment.api + environment.getSpecificUser+idUser+'/';
    return await axios.get(path);
}

const UpdateUser=async (body,id)=>{
    

    const path  = environment.api + environment.editUser+id+'/';
    return await axios.put(path,body);
    

}



export {RegisterUser,LoginUser,GetUser,UpdateUser,GetSpecificUser}