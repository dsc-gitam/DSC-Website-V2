import React,{useState} from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import './App.css';
import { MainPage } from "./Components/Main";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Events } from "./Components/Events";
import { Admin } from "./Admin/Admin";
import firebase from "firebase/app";
import firebaseConfig from "./Firebase/FirebaseConfig";
import "firebase/database";
import "firebase/storage";
import { AddEvent } from "./Admin/AddEvent";
import { AdminContext, EditContext, EditKeyContext } from "./Context/Context";
import { EditEvent } from "./Admin/EditEvent";
import { EditItem } from "./Admin/EditItem";
import { Toast } from "reactstrap";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { MainEvents } from "./Components/MainEvents";
import Cards from "./Components/Cards";

firebase.initializeApp(firebaseConfig);

function App() {
  const [isAdmin,setIsAdmin]=useState(false);
  const [EdiitItem,setEdiitItem]=useState("");
  const [EdiitKey,setEdiitKey]=useState("");
  return (
    <Router>
      <Navbar />
      <div>
        <AdminContext.Provider value={{isAdmin,setIsAdmin}}>
          <EditContext.Provider value={{EdiitItem,setEdiitItem}}>
          <EditKeyContext.Provider value={{EdiitKey,setEdiitKey}}>
        <ToastContainer/>
            <Switch >
              <Route exact path="/" component={MainPage}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/admin" component={Admin}/>
              <Route exact path="/addevent" component={AddEvent}/>
              <Route exact path="/editevent" component={EditEvent}/>
              <Route exact path="/edititem" component={EditItem}/>
              <Route exact path="/team" component={Cards} />
          </Switch>
          </EditKeyContext.Provider>
          </EditContext.Provider>
          </AdminContext.Provider>
    </div>

      <Footer />

    </Router>

  );
}

export default App;