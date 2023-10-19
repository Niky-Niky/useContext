import './App.css';
import { SignButton } from './components/Button/Button';
import { createContext, useState} from 'react';

export const Context = createContext(null);

function App() {
  const [signedIn, setSignedIn] = useState(null);

  return(
    <>
    <Context.Provider value={{signedIn, setSignedIn}}>
      <SignButton/>
      <h1>{signedIn ? 'Signed In' : 'Signed Out'}</h1>      
    </Context.Provider>
    
    
    
    </>
  )
};

export default App;
