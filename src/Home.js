
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  const {data:blogs,isPending, error}=useFetch( 'http://localhost:8000/blogs');




 

    

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>loading ...</div>}
      {blogs && <BlogList blogs={blogs}/>}
      
    </div>
    );
}
 
export default Home;
