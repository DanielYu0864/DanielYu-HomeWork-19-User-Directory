import logo from './logo.svg';
import './App.css';
import GetRandomUser from './components/GetRandomUser';
import GetAllUsers from'./components/GetAllUsers';
import GetMaleUsers from './components/GetMaleUsers';
import GetFemaleUsers from './components/GetFemaleUsers';

function App() {
  return (
    <div className="App">
      <h1>Main Page</h1>
      {/* <GetRandomUser/> */}
      {/* <GetAllUsers/> */}
      {/* <GetMaleUsers/> */}
      <GetFemaleUsers/>
    </div>
  );
}

export default App;
