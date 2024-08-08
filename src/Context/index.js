import React from 'react'

const AppContext = React.createContext();

function ProviderContext(props){

    /* ESTADOS */

    let [userData,setUserData] = React.useState(null);
    let [roles,setRoles] = React.useState([]);
    let [moduls,setModuls] = React.useState([]);
    let [institution,setInstitution] = React.useState([]);
    let [selectModul,setSelectModul] = React.useState(null);
    let [selectActivity,setSelectActivity] = React.useState(null);
    let [selectActivityIndex,setSelectActivityIndex] = React.useState(null);
    let [selectModulAdmin,setSelectModulAdmin] = React.useState(null);
    let [selectModulInstiAdmin,setSelectModulInstiAdmin] = React.useState(null);
    /* FUNCTIONS */

    const cleanContext=()=>{
        setUserData(null);
        setRoles([]);
        setModuls([]);
        setInstitution([]);
        setSelectModul(null);
        setSelectModulAdmin(null);
        setSelectModulInstiAdmin(null);
        setSelectActivity(null);
        setSelectActivityIndex(null);
    }
    

    return (
        
        <AppContext.Provider value={{selectActivityIndex,setSelectActivityIndex,selectActivity,setSelectActivity,userData,setUserData,cleanContext,roles,setRoles,moduls,setModuls,institution,setInstitution,selectModul,setSelectModul,selectModulAdmin,setSelectModulAdmin,selectModulInstiAdmin,setSelectModulInstiAdmin}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};