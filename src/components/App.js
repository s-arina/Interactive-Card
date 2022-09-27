import '../css/App.css';
import Cards from './Cards';
import CardForm from './CardForm';

function App() {
  return (
    <div id='app'>
      <div id='sidebar'></div>
      <div id='content'>
        <Cards />
        <CardForm />
      </div>
    </div>
  );
}

export default App;
