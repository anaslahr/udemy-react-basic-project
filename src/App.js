import React, {useState} from 'react';
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUSerHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge, id:Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUSerHandler} />
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;
