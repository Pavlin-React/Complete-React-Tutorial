import { useState } from "react";

const Create = () => {

  let [title, setTitle] = useState( '' )
  let [body, setBody] = useState( '' )
  let [author, setAuthor] = useState( '' )

  return (
    <div className='create'>
      <h2>Add a new Blog</h2>
      <form>
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
        <button>Add blog</button>
        <p>{ title }</p>
        <p>{ body }</p>
        <p>{ author }</p>
      </form>
    </div>
  );
}

export default Create
  