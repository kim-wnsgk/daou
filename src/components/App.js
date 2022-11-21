import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { getAuth } from "firebase/auth";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
 
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      console.log(user)
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return <>{init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing"}</>;
}

export default App;
