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
    createInstitution:'users/createInstitution/',

    // USERS
    register:'users/register/',
    login: 'users/login/',
    userInfo:'users/user-info/',
    getUser:'users/',
    getSpecificUser:'users/',
    editUser:'users/',
    // news
    getNews:  'content/news/',
    createNew:'content/news/',
    updateNew:'content/news/',

    // rols

    getRols:'users/roles/',

    // MODULS

    getModuls:'modules/modules/',
    getUsersResponse:'modules/user-modules/',
    createUserModule:'modules/create-user-module/',

    // COMMENTS
    getComments:'community/comments/',
    createComment:'community/comments/',
    


}