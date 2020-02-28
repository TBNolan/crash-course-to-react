import React, {useState} from 'react';
import Tweet from './tweet';


function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
    setRed(!isRed);
  };

  const [users, setUsers] = useState([
    {name: 'Drew', message: "I am Drew", likes: 0},
    {name: 'Mesut', message: "I am Mesut", likes: 15000},
    {name: 'Hector', message: "I am Hector", likes: 500}
  ]);

  return(
    <div className="app">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))};
      
      <h1 className={isRed ? 'red' : '' }>Change color</h1>
      <button onClick={Increment}>Increment</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
