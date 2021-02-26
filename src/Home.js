const Home = () => {

    const handleClick=()=>{
      console.log('Hello');
    }

    const handleClickAgain =(name)=>{
      console.log('hello, '+name);
    }

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>click me!</button>
      <button onClick={()=>handleClickAgain('nasr')}>click me!</button>
    </div>
    );
}
 
export default Home;
