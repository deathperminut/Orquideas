import axios from "axios";
import { environment } from "../../environments/environments";




const GetNews=async ()=>{
    
    const path  = environment.api + environment.getNews;

    return await axios.get(path);
}


export {GetNews}
