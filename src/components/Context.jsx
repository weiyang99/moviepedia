import React, { useEffect, useState } from "react";

export const Type = React.createContext();
export const ContextProvider = ({ children }) => {
  const [isTv, setIsTv] = useState(localStorage.getItem('type'));
  
  useEffect(() => {
    if(isTv === undefined || isTv === null){
      setIsTv(false);
    }
    
    setIsTv(JSON.parse(localStorage.getItem('type')));

  }, []);

  useEffect(() => {
      localStorage.setItem('type', JSON.stringify(isTv));
  }, [isTv]);

  return <Type.Provider value={{ isTv, setIsTv }}>{children}</Type.Provider>;
};
