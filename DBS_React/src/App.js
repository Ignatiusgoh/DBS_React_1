import logo from './logo.svg';
import './App.css';
import Dropdown from './components/Dropdown';
import UserImage from './components/Userimage';
import Userinfo from './components/Userinfo';


function App() {
  return (
    <div className="App">
      <UserImage />
      <Dropdown />
      <Userinfo />
    </div>
  );
}

export default App;
