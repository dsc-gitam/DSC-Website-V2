import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { AdminContext } from "../Context/Context";
import "./admin.style.css";
import firebase from "firebase/app";
import { toast } from "react-toastify";
import AddMember from "./addMember/addMember";
export const Admin = () => {
  const history = useHistory();
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const [password, setPassword] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const getData = async () => {
    const eventsRef = await firebase.database().ref("/admin");
    eventsRef.on("value", (snapshot) => {
      console.log(snapshot.val());
      setPassword(snapshot.val());
    });
  };
  const handleAdmin = () => {
    if (enteredPassword == password.password) {
      setIsAdmin(true);
    } else {
      toast("Your Password is Incorrect", { type: "error" });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div
      style={{ marginLeft: "25px", marginRight: "25px", marginTop: "100px" }}
    >
      <h1 style={{ marginLeft: "40%" }}>Admin Page</h1>
      {isAdmin ? (
        <>
          <AddMember />
          <button
            class="btn btn-secondary m-5"
            onClick={() => {
              history.push("/addEvent");
            }}
          >
            Add Event
          </button>
          <br />
          <button
            class="btn btn-secondary m-5"
            style={{ marginTop: "10px" }}
            onClick={() => {
              history.push("/editevent");
            }}
          >
            Edit Event
          </button>
        </>
      ) : (
        <div style={{ margin: "20px" }}>
          <h5 style={{ textAlign: "center" }}>Enter your Admin Password</h5>
          <input
            type="password"
            placeholder={"Your Admin Password"}
            value={enteredPassword}
            onChange={(e) => setEnteredPassword(e.target.value)}
            className="form-control adminPassword"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleAdmin}
            style={{ marginTop: "20px", marginLeft: "20px" }}
          >
            Submit
          </button>
        </div>
      )}
    </div>
  );
};
