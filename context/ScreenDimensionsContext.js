import React, { createContext, useState, useEffect } from 'react';
import { Dimensions } from 'react-native';

const ScreenDimensionsContext = createContext();

const ScreenDimensionsProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState(Dimensions.get('window'));

  useEffect(() => {
    const handleChange = ({ window }) => {
      setDimensions(window);
    };

    const subscription = Dimensions.addEventListener('change', handleChange);

    return () => {
      subscription?.remove();
    };
  }, []);

  return (
    <ScreenDimensionsContext.Provider value={dimensions}>
      {children}
    </ScreenDimensionsContext.Provider>
  );
};

export { ScreenDimensionsProvider, ScreenDimensionsContext };
