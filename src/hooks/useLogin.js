import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useLogin = () => {
  const [error, setError] = useState(null); // if any error occurs
  const [isLoading, setIsLoading] = useState(null); // if the request is in progress
  const { dispatch } = useAuthContext(); // to update the auth context

  const login = async (email, password) => {
    setIsLoading(true); // start loading
    setError(null);
    console.warn("made request");
    // 192.168.8.181
    // 10.10.21.130
    // callinng the login api
    const response = await fetch("https://arbookreaderserver.onrender.com/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json(); // getting the json response
    console.log("response", json);

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
      return json.error;
    }
    if (response.ok) {
      // save the user to local storage
      console.warn("saving user");
      AsyncStorage.setItem("user", JSON.stringify(json)); 

      // update the auth context
      dispatch({ type: "LOGIN", payload: json }); // update the auth context

      // update loading state
      setIsLoading(false);
      return null
    }
  };

  return { login, isLoading, error };
};