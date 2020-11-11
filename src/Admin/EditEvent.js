import React,{useState,useEffect, useContext} from "react";
import firebase from "firebase/app";
import { MdDelete } from "react-icons/md";
import { AiFillEdit } from "react-icons/ai";
import { Col,Row, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { AdminContext, EditContext, EditKeyContext } from "../Context/Context";
import {Link, useHistory} from "react-router-dom"

export const EditEvent=()=>{
  const history=useHistory();
  const {isAdmin,setIsAdmin}=useContext(AdminContext);

  const [events,setEvents]=useState("");
  const {EdiitItem,setEdiitItem}=useContext(EditContext);
  const {EdiitKey,setEdiitKey}=useContext(EditKeyContext);
  const getData=async ()=>{
    const eventsRef=await firebase.database().ref('/events');
    eventsRef.on('value',(snapshot)=>{
      console.log(snapshot.val());
      setEvents(snapshot.val())
      console.log(events);
    })
  };
  const deleteItem=(id)=>{
    console.log(id);
    firebase.database()
    .ref(`/events/${id}`)
    .remove()
    .then(()=>{console.log("successfully removed",{type:"info"})})
    .catch((err)=>console.log(err))
  }

  const EditItems=(key,value)=>{
      console.log(key);
      setEdiitItem(value);
      setEdiitKey(key);
      history.push('/edititem');
  }

  useEffect(()=>{getData();},[])
    return(
       (isAdmin)?(
        <div style={{marginTop:"100px"}}> 
        <div className="event-sec m-5">
      <div className="container">
        <h3 className="text-center">Edit (or) Delete Events</h3>
          <p className="text-center">Come learn, share and connect with us in person.</p>
          <div className="row ">
          {
          (events!=null)?(
            Object.entries(events).map(([key,value])=>(
              <div className="col-lg-4 col-md-6 col-12 card-btm" style={{width:"300px"}}>
        <img class="card-img-top" style={{height:"250px"}} src={value.picture} alt="Card image cap"/>
        <div class="card-body">
            <h3 className="text-left card-text" style={{marginBottom:"15px"}} >{value.EventName}</h3>
          <Row>
            <Col>
            <p className="text-left m-0 p-0 card-text"><i class="far fa-calendar-alt text-primary" style={{marginRight:"15px"}}></i>{value.Date.split("T")[0]}</p>
          <p className="text-left card-text m-0 p-0"><i class="far fa-clock text-success"  style={{marginRight:"10px"}}></i>{value.Date.split("T")[1]}</p>
          <p className="bg-danger text-left pl-2 pr-2 level" style={{width:"70%",borderRadius:"25px", color:"#fff",fontSize:"12px"}}>{value.Level}</p>

            </Col>
            <Col>
            {(value.status)?(
          <a href="#" class="btn btn-success float-right ">Completed</a>
          ):(
          <a href="#" class="btn btn-primary float-right attend-btn" style={{background:"#2f5be7"}}>Attend</a>
          )}
            </Col>
          </Row>
                      <button type="button" onClick={()=>deleteItem(key)} class="btn btn-success" style={{fontSize:"15px",marginTop:"4px"}} ><MdDelete/></button>
                      <span class="btn btn-secondary" onClick={()=>EditItems(key,value)}  style={{fontSize:"15px",marginLeft:"20px",marginTop:"5px"}} ><AiFillEdit/></span>
                </div>
              </div>
            )
          )):(<></>)}
              </div>

        </div>
      </div>
      
  </div>
       ):(<Redirect to="/admin"/>)
  
    )
};