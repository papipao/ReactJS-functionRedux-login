import './App.css';
import Theme from './components/Theme';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return (
    <div className='container'>
      <Profile />
      <Login />
      <Theme />
    </div>
  );
}

export default App;
