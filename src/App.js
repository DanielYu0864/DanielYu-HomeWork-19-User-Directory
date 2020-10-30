import logo from './logo.svg';
import './App.css';
import GetAllUsers from'./pages/GetAllUsers';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      {/* <GetRandomUser/> */}
      <GetAllUsers/>
    </div>
  );
}

export default App;
