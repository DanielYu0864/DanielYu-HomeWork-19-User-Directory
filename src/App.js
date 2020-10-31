import logo from './logo.svg';
import './App.css';
import GetAllUsers from'./pages/GetAllUsers';
import NavTabs from './components/NavTabs';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      <GetAllUsers/>
    </div>
  );
}

export default App;
