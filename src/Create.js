import { useState } from "react";

const Create = () => {

  let [title, setTitle] = useState( '' )
  let [body, setBody] = useState( '' )
  let [author, setAuthor] = useState( '' )
  let [isPending, setIsPending] = useState( false )

  let handleSubmit = ( e ) => {
    e.preventDefault()

    let blog = { title, body, author }

    setIsPending( true )
    
    fetch( 'http://localhost:8000/blogs', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify( blog )
    } ).then( () => {
      console.log('new blog added');
      setIsPending( false )
    } )

  }

  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog title</label>
        <input
        value={ title }
        onChange={ ( e ) => setTitle( e.target.value ) }
        type='text'
        required
        />
        <label>Blog body</label>
        <textarea 
        required
        value={ body }
        onChange={ ( e ) => setBody( e.target.value ) }
        >

        </textarea>
        <label>Blog author</label>
        <select
        value={ author }
        onChange={ ( e ) => setAuthor( e.target.value ) }
        >
          <option value='mario'>mario</option>
          <option value='yoshi'>yoshi</option>
          
        </select>
        { !isPending && <button>Add blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}

export default Create
  