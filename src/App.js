import { useSelector } from "react-redux";

import UserForm from "./Components/UserForm";
import Counter from "./Components/Counter";

import './App.css';

function App() {
  const { counter, user } = useSelector((state) => state);
  const { name, age, gender } = user

  return (
    <>
      <div className="container">
        <div className="user">
          <div >
            <h1>User</h1>
            <h2>Name: {name}</h2>
            <p>Age: {age}</p>
            <p>Gender: {gender}</p>
          </div>
          <UserForm />
        </div>
        <div className="counter">
          <Counter counterValue={counter}/>
        </div>
      </div>
    </>
  );
}

export default App;