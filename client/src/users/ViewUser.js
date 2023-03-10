import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function ViewUser() {
  const { id } = useParams();
  // CREATE STATE WITH OBJECT STRUCTURED AS THE DATA MODEL TO STORE DATA INTO THE STATE
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
  });
  // DECONSTRUCTS THE OBJECT
  const { name, username, email } = user;

  // USE EFFECT HOOK IN ORDER TO MAKE THE CALL TO THE API SO YOU CAN USE THE AXIOS FUNCTIONS TO CREATE THE HTTP REQUESTS
  useEffect(() => {
    loadUser();
  }, []);

  // GET THE USER THAT IS GONGING TO BE VIEWED
  const loadUser = async () => {
    const result = await axios.get(`http://localhost:8080/user/${id}`);
    setUser(result.data);
  };

  //   E TO CREATE EVENT SO THE HANDLERS CAN LISTEN
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounder p-4 mt-2 shadow">
          <h2 className="text-center m-4">View User</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="Name" className="form-label">
                Name
              </label>
              <label>{user.name}</label>
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
              </label>
              <label>{user.username}</label>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <label>{user.email}</label>
            </div>

            <Link to="/" className="btn btn-outline-dark mx-2">
              Back to home
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
