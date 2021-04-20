import { useState } from "react";

const Home = () => {

  let [name, setName] = useState( 'mario' )
  let [age, setAge] = useState( 23 )

  let handleClick = (e) => {
    setName( 'luigi' )
    setAge( 33 )
  }

  return (
    <div className='home'>
      <h2>Homepage</h2>
      <p>{ name } is { age } years old </p>
      <button onClick={ handleClick } >Click Me</button>
    </div>
  );
}

export default Home;