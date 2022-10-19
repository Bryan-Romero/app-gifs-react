import React, { useEffect, useState } from "react";
import getFavGifService from "services/getFavsGifsService";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [favs, setFavs] = useState([]);
  const [jwt, setJWT] = useState(() => window.sessionStorage.getItem("jwt"));

  useEffect(() => {
    if(!jwt) return setFavs([])
    getFavGifService({jwt}).then(res => {
      console.log(res)
      setFavs(res)
    })
    console.log(favs)
  }, [jwt])

  return (
    <Context.Provider value={{favs, setFavs, jwt, setJWT }}>
        {children}
    </Context.Provider>
  );
}
export default Context;
