import React from 'react'

const AppContext = React.createContext();

function ProviderContext(props){

    /* ESTADOS */

    let [userData,setUserData] = React.useState(null);

    /* FUNCTIONS */

    const cleanContext=()=>{
        setUserData(null);
    }
    

    return (
        
        <AppContext.Provider value={{userData,setUserData,cleanContext}}>
            {props.children}
        </AppContext.Provider>
        
    );
    
}

export {ProviderContext,AppContext};