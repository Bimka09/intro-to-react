import axios from 'axios';
import { useState } from 'react';

function InputForm() {
  const [url, setUrl] = useState('');
  const [apiData, setApiData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios(url);
      setApiData(response.data);
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Введите URL адрес API"
      />
      <button onClick={fetchData}>Загрузить данные</button>

      {apiData && (
        <div>
          <pre>{JSON.stringify(apiData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}

export default InputForm;