import {useState} from 'react';

const useDictionary = () => {
  const [definitions, setDefinitions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchWord = async searchTerm => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchTerm}`,
      );
      const data = await response.json();

      console.log(data[0].meanings[0].definitions[0].example);
      setDefinitions(data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return {definitions, loading, error, searchWord};
};

export default useDictionary;
