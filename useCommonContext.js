// import { useNavigation } from '@react-navigation/native';
import React, {createContext, useContext} from 'react';

const CommonContext = createContext();

const CommonContextProvider = ({children}) => {
  // const navigation = useNavigation();
  const abc = "hello world"

  const value = {abc}

  return (
    <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
  )
}

export const useCommonContext = () => {
  return useContext(CommonContext)
};

export default CommonContextProvider;