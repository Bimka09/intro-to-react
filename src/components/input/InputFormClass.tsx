import axios from 'axios';
import React, { ChangeEvent } from 'react';

interface UrlApiState {
  url: string;
  apiData: any | null;
}

class InputForm extends React.Component<{}, UrlApiState> {

  constructor(props:{}) {
    super(props);
    this.state = {
      url: "",
      apiData: null,
    };
  }
  fetchData = async () => {
    try {
      const response = await axios(this.state.url);
      this.setState({ apiData: response.data });
    } catch (error) {
      console.error('Ошибка при загрузке данных:', error);
    }
  };

  handleUrlChange = (e: ChangeEvent<HTMLInputElement>) => {
    this.setState({ url: e.target.value });
  };

  render() {
      return <div>
      <input
        type="text"
        value={this.state.url}
        onChange={this.handleUrlChange}
        placeholder="Введите URL адрес API"
      />
      <button onClick={this.fetchData}>Загрузить данные</button>

      {this.state.apiData && (
        <div>
          <pre>{JSON.stringify(this.state.apiData, null, 2)}</pre>
        </div>
      )}
    </div>;
    }
  }

  export default InputForm;