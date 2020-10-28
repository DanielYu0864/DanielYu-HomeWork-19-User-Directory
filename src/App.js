import logo from './logo.svg';
import './App.css';
import GetRandomUser from './components/GetRandomUser';
import GetAllUsers from'./components/GetAllUsers';
import GetMaleUsers from './components/GetMaleUsers';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      {/* <GetRandomUser/> */}
      {/* <GetAllUsers/> */}
      <GetMaleUsers/>
    </div>
  );
}

export default App;
