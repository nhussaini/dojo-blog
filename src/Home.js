import { useState } from 'react';

const Home = () => {

  const [name, setName] = useState('mario');
  const [age, setAge] =useState(25);

    const handleClick=()=>{
      setName('Nasr');
      setAge(27);
    }

    const handleClickAgain =(name)=>{
      console.log('hello, '+name);
      
    }

  return (
    <div className="Home">
      <h2>Homepage</h2>
      <p>{name} is {age} years old</p>
      <button onClick={handleClick}>click me!</button>
      <button onClick={()=>handleClickAgain('nasr')}>click me!</button>
    </div>
    );
}
 
export default Home;
