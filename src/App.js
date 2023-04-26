import { useSelector } from "react-redux";

import UserForm from "./Components/UserForm/UserForm";

import './App.css';

function App() {
  const { name, age, gender } = useSelector((state) => state);

  return (
    <>
      <div className="container user">
        <div >
          <h1>User</h1>
          <h2>Name: {name}</h2>
          <p>Age: {age}</p>
          <p>Gender: {gender}</p>
        </div>
        <UserForm />
      </div>
    </>
  );
}

export default App;