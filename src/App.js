
import './App.css';

function App() {

  let title = 'Welcome to the new block'
  let likes = 50
  let url = 'https://www.google.com/'

  return (
    <div className="App">
      <div className='content'>
        <h1>
          { title }
        </h1>
        <p>Liked { likes } times</p>
        <p>{ Math.floor(Math.random() * 10) }</p>
        <a href={ url }>google</a>
      </div>
    </div>
  );
}

export default App;
