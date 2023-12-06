import { createContext, useState } from "react";

export const MapContext = createContext();


function MapProvider({children}){

  const [mapStyle, setMapStyle] = useState();
  const [visibility, setVisibility] = useState({traffic: false})
  
  return(
    <MapContext.Provider value={{mapStyle, setMapStyle, visibility, setVisibility}}>
      {children}
    </MapContext.Provider>
  )
}

export default MapProvider