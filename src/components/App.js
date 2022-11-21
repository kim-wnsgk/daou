import React, { useEffect, useState } from "react";
import AppRouter from "./Router";
import { authService } from "../firebase";
import { getAuth } from "firebase/auth";
import Auth from "../routes/Auth";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [init, setInit] = useState(false);
 
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
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
