import { useState } from 'react';
import '../css/App.css';
import Cards from './Cards';
import CardForm from './CardForm';

function App() {
  const [data, setData] = useState(null);
  const [input, setInput] = useState({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: '',
  });

  return (
    <div id='app'>
      <div id='sidebar'></div>
      <div id='content'>
        <Cards data={data} />
        <CardForm
          data={data}
          setData={setData}
          input={input}
          setInput={setInput}
        />
      </div>
    </div>
  );
}

export default App;
