import { createContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext(); // create the context

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload }; // set the user
    case "LOGOUT":
      return { user: null }; // remove the user
    default:
      return state;
  }
};

// create the context provider and pass the reducer and initial state
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null, // initial state
  });

  //set the context that user is logged in from local storage everytime the site is reloaded
  useEffect(() => {
    const user = AsyncStorage.getItem("user");

    if (user) {
      dispatch({ type: "LOGIN", payload: user }); // update the auth context
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}> 
      {children}
    </AuthContext.Provider>
  );
};