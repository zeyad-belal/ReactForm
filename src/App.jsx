import React from "react";
import Form from "./assets/Components/Form.jsx";
import UsersList from "./assets/Components/UsersList";

function App() {
  let [allUsers, setAllUsers] = React.useState([]);

  function assignUserData(userName, userAge) {
    setAllUsers((prevUsers) => {
      return [{ Name: userName, Age: userAge }, ...prevUsers];
    });
  }
  return (
    <>
      <Form userData={assignUserData} />
      <UsersList users={allUsers} />
    </>
  );
}

export default App;
