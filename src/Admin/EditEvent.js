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
  var arr=[];
  let sortedData=[];
  let i=0;
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

  
  if(events!=null){
    arr=Object.entries(events);
  }
  console.log(arr);
  if(arr!=null && arr!=[]){
    console.log("sdds");
  console.log(Object.values(arr));
  sortedData=Object.values(arr).sort((a, b) => new Date(a[1].Date.split('/').reverse()) - new Date(b[1].Date.split('/').reverse()))
    console.log(sortedData);
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
            sortedData.map((value)=>(
              <div className="col-lg-4 col-md-6 col-12 card-btm" style={{width:"300px"}}>
        <img class="card-img-top" style={{height:"250px"}} src={value[1].picture} alt="Card image cap"/>
        <div class="card-body">
            <h3 className="text-left card-text" style={{marginBottom:"15px"}} >{value[1].EventName}</h3>
          <Row>
            <Col>
            <p className="text-left m-0 p-0 card-text"><i class="far fa-calendar-alt text-primary" style={{marginRight:"15px"}}></i>{value[1].Date.split("T")[0]}</p>
          <p className="text-left card-text m-0 p-0"><i class="far fa-clock text-success"  style={{marginRight:"10px"}}></i>{value[1].Date.split("T")[1]}</p>
          <p className="bg-danger text-left pl-2 pr-2 level" style={{width:"70%",borderRadius:"25px", color:"#fff",fontSize:"12px"}}>{value[1].Level}</p>

            </Col>
            <Col>
            {(value[1].status)?(
          <a href="#" class="btn btn-success float-right ">Completed</a>
          ):(
          <a href="#" class="btn btn-primary float-right attend-btn" style={{background:"#2f5be7"}}>Attend</a>
          )}
            </Col>
          </Row>
               <button type="button" onClick={()=>deleteItem(value[0])} class="btn btn-success" style={{fontSize:"15px",marginTop:"4px"}} ><MdDelete/></button>
               <span class="btn btn-secondary" onClick={()=>EditItems(value[0],value[1])}  style={{fontSize:"15px",marginLeft:"20px",marginTop:"5px"}} ><AiFillEdit/></span>
               </div>
            </div>
            )
          )} 
              </div>

        </div>
      </div>
      
  </div>
       ):(<Redirect to="/admin"/>)
  
    )
};