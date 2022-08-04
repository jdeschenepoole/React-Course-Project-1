import React, { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [usersList, setUserList] = useState([]);

  const addUserHandler  = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {
        key: Math.random().toString(),
        name: uName, 
        age: uAge}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
