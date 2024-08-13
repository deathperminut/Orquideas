import axios from "axios";
import { environment } from "../../environments/environments";




const getModuls=async ()=>{
    
    const path  = environment.api + environment.getModuls;

    return await axios.get(path);
}

const getUserModulActivities=async(path)=>{
        return await axios.get(path);
}

const updateActivities=async(path,body)=>{
    return await axios.put(path,body);
}

const loadActivitiesUsers=async()=>{

    let path = environment.api + environment.getUsersResponse
    return await axios.get(path);
}


export {getModuls,getUserModulActivities,updateActivities,loadActivitiesUsers}