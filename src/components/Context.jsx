import React, { useEffect, useState } from "react";

export const Type = React.createContext();
export const ContextProvider = ({ children }) => {
  const [isTv, setIsTv] = useState(sessionStorage.getItem('type'));

  useEffect(() => {
    if (isTv === undefined || isTv === null) {
      setIsTv(false);
    }

    setIsTv(JSON.parse(sessionStorage.getItem('type')));

  }, []);

  useEffect(() => {
    sessionStorage.setItem('type', JSON.stringify(isTv));
  }, [isTv]);

  return <Type.Provider value={{ isTv, setIsTv }}>{children}</Type.Provider>;
};
