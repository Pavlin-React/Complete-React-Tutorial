import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  let [blogs, setBlogs] = useState( null )
  let [isPending, setIsPending] = useState( true )


  useEffect( () => {
    setTimeout( () => {
      fetch( 'http://localhost:8000/blogs' )
      .then( res => res.json() )
      .then( data => setBlogs( data ) )
      setIsPending( false )
    }, 1000 )
  }, [] )


  return (
    <div className='home'>
      { isPending && <div>Loading...</div> }
      { blogs && <BlogList blogs={ blogs } title='All blogs' /> }
    </div>
  );
}

export default Home;