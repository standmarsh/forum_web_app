import React, { useState,useEffect } from 'react';
import './App.css';
import Axios from 'axios';

function App() {
  const [name,setUserName] = useState('');
  const [age,setAge] = useState(0);

  const[userList,setUserList] = useState([]);

  const [newAge,setNewAge] = useState(0);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      console.log(response.data);
      setUserList(response.data);
    })
  }, []);

  const submitButton = () => {
      Axios.post('http://localhost:3001/api/insert',{userName: name, userAge: age});
      setUserList([...userList,{name: name, age: age}]);
  };

  const deleteUser = (userName) => {
    Axios.delete(`http://localhost:3001/api/delete/${userName}`);
  };

  const updateAge = (userName) => {
    Axios.put('http://localhost:3001/api/update',{userName: userName, userAge: newAge});
    setNewAge("");  
};

  return (
    <div className="App">
    <h1>SIGNUP PAGE</h1>
    <div className="form-container">
      <label>UserName: </label>
      <input className="form-input" type="text" name="userName" onChange={(e)=>setUserName(e.target.value)}/>
      <label>Age: </label>
      <input className="form-input" type="number" name="userAge" onChange={(e)=>setAge(e.target.value)}/>
    </div>
    <button className="form-button" onClick={submitButton}>Submit</button>
    {userList.map((val)=>{
      return (
        <div className="user-list">
        <h1> UserName: {val.name}</h1> 
        <p1>Age: {val.age}</p1>
        <button onClick={()=>{deleteUser(val.name)}}>Delete</button>
        <input type="number" id="updateAge" onChange={(e)=>{
          setNewAge(e.target.value);
        }}/>
        <button onClick={()=> {updateAge(val.name)}}>Update</button>
        </div>
      );
    })}
    </div>
  );
}

export default App;