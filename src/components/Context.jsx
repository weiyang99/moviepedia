import React, { useState } from "react";

export const Type = React.createContext();
export const ContextProvider = ({ children }) => {
  const [isTv, setIsTv] = useState(false);

  return <Type.Provider value={{ isTv, setIsTv }}>{children}</Type.Provider>;
};
