import { useState,useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {

 const [blogs, setBlogs] = useState(null);
 const [isPending,setisPending] = useState(true);
 const [error, setError] = useState(null);


 useEffect(()=>{
  setTimeout(()=>{
    fetch(' http://localhost:8000/blogs')
    .then(res =>{
      if(!res.ok){
        throw Error('could not fetch the data for that resource');
      }
      return res.json();
    })
    .then(data=>{
      //console.log(data);
      setBlogs(data);
      setisPending(false);
      setError(null);
    })
    .catch(err=>{
      setError(err.message);
      setisPending(false);
    })
  },1000)
 },[]);

    

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <di>loading ...</di>}
      {blogs && <BlogList blogs={blogs}/>}
      
    </div>
    );
}
 
export default Home;
