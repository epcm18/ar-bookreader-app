import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (firstName, lastName, email, password, confirmPassword) => {
    setIsLoading(true);
    setError(null);

    console.warn('made request');

    try {
      const response = await fetch('https://arbookreaderserver.onrender.com/api/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName, lastName, email, password, confirmPassword }), // Send the user data to the server
      });

      const json = await response.json(); // Get the JSON response

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
        return json.error;

      } else {
        // Save the user to local storage
        await AsyncStorage.setItem('user', JSON.stringify(json)); // save the user to local storage

        // Update the auth context
        dispatch({ type: 'LOGIN', payload: json });

        // Update loading state
        setIsLoading(false);

        console.log('User JSON entity:', JSON.stringify(json, null, 2));
        return null;
      }
    } catch (error) {
      console.error('Error during sign up:', error);
      setError('An error occurred during sign up.');
      setIsLoading(false);
    }
  };

  return { signup, isLoading, error };
};
