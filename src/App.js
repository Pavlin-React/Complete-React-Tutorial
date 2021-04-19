
import './App.css';
import Home from './Home';
import Navbar from './Navbar';

function App() {

  let title = 'Welcome to the new block'
  let likes = 50
  let url = 'https://www.google.com/'

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        
        <Home />
      </div>
    </div>
  );
}

export default App;
