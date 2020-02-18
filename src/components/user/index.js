import React, { useState, Fragment } from "react";
import AddUserForm from "../forms/add-user";
import EditUserForm from "../forms/edit-user";
import UserTable from "../user-table";

const UserPage = () => {
  // Data
  const usersData = [
    {
      id: 1,
      name: "Tania",
      lastName: "Lopes",
      username: "floppydiskette",
      phone: "0313333-3333"
    },
    {
      id: 2,
      name: "Craig",
      lastName: "Aha",
      username: "siliconeidolon",
      phone: "0312525-2000"
    },
    {
      id: 3,
      name: "Ben",
      lastName: "Joaquim",
      username: "benisphere",
      phone: "0353566-4000"
    }
  ];

  const initialFormState = {
    id: null,
    name: "",
    lastName: "",
    username: "",
    phone: ""
  };

  // Setting state
  const [users, setUsers] = useState(usersData);
  const [currentUser, setCurrentUser] = useState(initialFormState);
  const [editing, setEditing] = useState(false);

  // CRUD operations
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  const deleteUser = id => {
    setEditing(false);

    setUsers(users.filter(user => user.id !== id));
  };

  const updateUser = (id, updatedUser) => {
    setEditing(false);

    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  const editRow = user => {
    setEditing(true);
	const {id, name, lastName, username, phone } = user
    setCurrentUser({
      id: id,
      name: name,
      lastName: lastName,
      username: username,
      phone: phone
    });
  };

  return (
    <div className="container">
      <h1>CRUD UserPage with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit user</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </Fragment>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
