import './App.css';
import GetAllUsers from'./pages/GetAllUsers';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{background: 'bottom'}} className="App">
      <h1>User Directory</h1>
      <GetAllUsers/>
      <Footer/>
    </div>
  );
}

export default App;
