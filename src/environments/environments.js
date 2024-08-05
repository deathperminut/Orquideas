import { configuraciones } from "../AppConfig";

let server =  configuraciones.server;


export const environment = {

    // API

    api:server,
    //////////////
    // endpoints //
    //////////////
    
    

    
    // instituciones
    
    getInstitutions:'users/institutions/',
    getSpecificInstitutions:'users/institutions/',
    editInstitution:'users/institutions/',
    deleteInstitution:'users/institutions/',

    // USERS
    register:'users/register/',
    login: 'users/login/',
    getUser:'users/',
    editUser:'users/',
    // news
    getNews:'content/news/',


    // rols

    getRols:'users/roles/',

    // MODULS

    getModuls:'modules/'

}