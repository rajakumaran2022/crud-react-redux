/* eslint-disable jsx-a11y/no-distracting-elements */
import { useSelector, useDispatch } from "react-redux";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addUser } from "../redux/user.feature";
import { editUser } from "../redux/user.feature";
import { removeUser } from "../redux/user.feature";
import { toast } from "react-toastify";

const Home = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");

  let [newUsername, setNewUsername] = useState("");
  let [newEmail, setNewEmail] = useState("");
  let [newMobile, setNewMobile] = useState("");

  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);

  let users = useSelector((store) => store.users.items);
  let navigate = useNavigate();
  let dispatch = useDispatch();

  const handleSubmit = () => {
    if (!username || !email || !mobile) {
      return toast.error("please fill all input fields");
    }

    dispatch(
      addUser({
        id: users.length + 1,
        username: username,
        email: email,
        mobile: mobile,
      })
    );
    setUsername("");
    setEmail("");
    setMobile("");
    navigate("/logged");
    // navigate("/");
  };

  return (
    <div className="text-center container login">
      <div className="row">
        <div className="col-md-8 text-start my-5">
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <div key={user.id} className="card my-2 p-2">
                  <div>
                    <div className="">
                      <p className="h5">{user.username}</p>
                      <p className="">{user.email}</p>
                      <p className="">{user.mobile}</p>
                      <div className="d-flex align-items-center justify-content-start text-start">
                        <button
                          onClick={() => {
                            setEdit(true);
                            setId(
                              user.id,
                              user.username,
                              user.email,
                              user.mobile
                            );
                            setNewUsername(user.username);
                            setNewEmail(user.email);
                            setNewMobile(user.mobile);
                          }}
                          className="btn btn-outline-primary py-1"
                        >
                          EDIT
                        </button>

                        <button
                          onClick={() => dispatch(removeUser(user.id))}
                          className="btn btn-outline-danger py-1 mx-2"
                        >
                          DELETE
                        </button>
                      </div>
                      {edit && id === user.id && (
                        <>
                          <div className="d-flex flex-wrap align-items-center justify-content-start my-2">
                            <div className="d-flex align-items-center justify-content-center">
                              <input
                                type="text"
                                name="username"
                                className="form-control  mx-1"
                                placeholder="Enter your UserName"
                                value={newUsername}
                                onChange={(e) => setNewUsername(e.target.value)}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                              <input
                                type="text"
                                name="email"
                                className="form-control  mx-1"
                                placeholder="Enter your EmailId "
                                value={newEmail}
                                onChange={(e) => setNewEmail(e.target.value)}
                              />
                            </div>
                            <div className="d-flex align-items-center justify-content-center">
                              <input
                                type="number"
                                name="mobile"
                                className="form-control  mx-1"
                                placeholder="Enter your MobileNumber"
                                value={newMobile}
                                onChange={(e) => setNewMobile(e.target.value)}
                              />
                            </div>
                            <button
                              onClick={() => {
                                dispatch(
                                  editUser({
                                    id: user.id,
                                    username: newUsername,
                                    email: newEmail,
                                    mobile: newMobile,
                                  })
                                );
                                setNewUsername("");
                                setNewEmail("");
                                setNewMobile("");
                                setEdit(false);
                              }}
                              className="btn btn-warning text-white mx-1 px-2 py-1"
                            >
                              UPDATE
                            </button>
                            <button
                              onClick={() => {
                                setEdit(false);
                              }}
                              className="btn btn-danger py-1"
                            >
                              X
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p className="h4 fw-200 display-5 text-info text-center">
              No users......
            </p>
          )}
        </div>

        <div className="col-md-4  my-5">
          <p className="h1 text-info fw-bold my-1 mx-5">LOGIN </p>
          <span className="text-info mx-5">---------------</span>

          <div className="d-flex align-items-center justify-content-center my-3">
            <input
              type="text"
              name="username"
              className="form-control mx-5"
              placeholder="Enter your UserName"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center  my-3">
            <input
              type="email"
              name="email"
              className="form-control mx-5"
              placeholder="Enter your EmailId "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="d-flex align-items-center justify-content-center  my-3">
            <input
              type="number"
              name="mobile"
              className="form-control mx-5"
              placeholder="Enter your MobileNumber"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="btn btn-outline-info text-muted mx-5 my-2 px-5 py-2"
          >
            SUBMIT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
