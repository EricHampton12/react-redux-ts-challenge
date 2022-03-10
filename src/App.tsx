import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import { RootStore } from "./Store";
import { GetUser } from "./actions/UserActions";

function App() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const userState = useSelector((state: RootStore) => state.user);

  const handleSubmit = () => dispatch(GetUser(userName));

  console.log(" user State", userState);

  return (
    <div className="App">
      <input type="text" />
      <button onClick={handleSubmit}>Search</button>
      {userState.user && (
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Company</th>
                <th scope="col">Phone</th>

              </tr>
            </thead>
            <tbody>
              {userState.user.map((user) => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.company}</td>
                    <td>{user.phone}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default App;
