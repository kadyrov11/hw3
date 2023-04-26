import React, { useState } from 'react'
import { useDispatch } from 'react-redux';

const UserForm = () => {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.target.name) {
        case "name":
            dispatch({ type: "NAME", payload: e.target.value });
            break;
        case "age":
            dispatch({ type: "AGE", payload: e.target.value });
            break;
        case "gender":
            dispatch({ type: "GENDER", payload: e.target.value });
            break;
        default:
            break;
    }
  };

  return (
    <form>
        <input type="text" name="name" onChange={handleChange} />
        <input type="number" name="age" onChange={handleChange} />
        <select name="gender" onChange={handleChange} >
          <option value="">Choose gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
    </form>
  )
}

export default UserForm