import React from 'react'

const AppContext = React.createContext();

function ProviderContext(props){

    /* ESTADOS */

    let [userData,setUserData] = React.useState(null);
    let [roles,setRoles] = React.useState([]);
    let [moduls,setModuls] = React.useState([]);
    let [institution,setInstitution] = React.useState([]);
    let [selectModul,setSelectModul] = React.useState(null);

    /* FUNCTIONS */

    const cleanContext=()=>{
        setUserData(null);
        setRoles([]);
        setModuls([]);
        setInstitution([]);
        setSelectModul(null);
    }
    

    return (
        
        <AppContext.Provider value={{userData,setUserData,cleanContext,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};