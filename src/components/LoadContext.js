import React, { createContext, useEffect, useState} from 'react';




const LoadContext = createContext();

export function LoadProvider({children}){
    const [load, setLoad] = useState([
        {
            "weight": "25000",
            "origin": "Staten Island NY",
            "destination": "Elizabeth NJ",
            "price_mile": 4,
            "pickup_date": "9/29/2021",
            "dropoff_date": "9/29/2021",
            "shipper_id": 4
         }
    ])
   
    return(
        <LoadContext.Provider value={{item: load}}>
            {children}
        </LoadContext.Provider>
    )
}


export default LoadContext;