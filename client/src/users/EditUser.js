import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  let navigate = useNavigate();

  const { id } = useParams();
  // CREATE STATE WITH OBJECT STRUCTURED AS THE DATA MODEL TO STORE DATA INTO THE STATE
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  // DECONSTRUCTS THE OBJECT
  const { name, username, email } = user;
  // STORE DATA INTO THE STATE TO BE POSTED ON THE DATABASE LATER
  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // USE EFFECT HOOK IN ORDER TO MAKE THE CALL TO THE API SO YOU CAN USE THE AXIOS FUNCTIONS TO CREATE THE HTTP REQUESTS
  useEffect(() => {
    loadUser();
  }, []);

  // PUT DATA INTO THE DATABASE WITH AXIOS
  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/user/${id}`, user);
    navigate("/");
  };
  // GET THE USER THAT IS GONGING TO BE MODIFIED
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  //   E TO CREATE EVENT SO THE HANDLERS CAN LISTEN
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounder p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit User</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter you name"
                name="name"
                value={name}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter you username"
                name="username"
                value={username}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter you email"
                name="email"
                value={email}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link to="/" className="btn btn-outline-danger mx-2">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
