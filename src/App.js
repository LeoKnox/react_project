import ReactDOM from 'react-dom/client';
import Character from './components/Character';
import List from './components/List';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h3>Create some projects</h3>
        <Character />
        <List />
      </header>
    </div>
  );
}

export default App;
