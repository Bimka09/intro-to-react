import axios from 'axios';
import { useState } from 'react';
import ErrorPrinter from './ErrorPrinter';

function InputForm() {
  const [url, setUrl] = useState('');
  const [apiData, setApiData] = useState(null);
  const [error, setError] = useState('');

  const fetchData = async () => {
    try {
      setError("");
      setApiData(null);
      const response = await axios(url);
      setApiData(response.data);
    } catch (error) {
      handleError(String(error));
    }
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
  }

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Введите URL адрес API"
      />
      <button onClick={fetchData} disabled={url === ""}>
        Загрузить данные
      </button>

      {error && <ErrorPrinter error={error} />}

      {apiData && (
        <div>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default InputForm;