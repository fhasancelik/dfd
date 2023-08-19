import {createContext, useContext,useState} from 'react';

const DataContext = createContext();

const DataProvider = ({children}) => {
  const [user, setUser] = useState(false);
  return (
    <DataContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </DataContext.Provider>
  );
};

export {DataContext, DataProvider};
