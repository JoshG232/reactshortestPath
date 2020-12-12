
import './App.css';
import {useState} from "react";

import Tweet from "./components/tweat"
function App() {

  const [users] = useState([
    { name: "Josh", message:"Damm"},
    { name: "Brick", message:"Nice"}
  ]);
  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message = {user.message} />
      ))}


    </div>
  );
}

export default App;
