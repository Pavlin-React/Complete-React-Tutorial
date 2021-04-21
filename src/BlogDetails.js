import { useParams } from "react-router-dom";

const BlogDetails = () => {

  let { id } = useParams()

  return (
    <div className='blog-details'>
      <h2>Blog Details - { id }</h2>
    </div>  
    );
}

export default BlogDetails;