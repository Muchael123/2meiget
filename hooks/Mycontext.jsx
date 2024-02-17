import React, { createContext, useState } from 'react';

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a provider to provide the context value to children
const MyProvider = ({ children }) => {
  const [isFound, setIsFound] = useState(false);

  return (
    <MyContext.Provider value={{ isFound, setIsFound }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider