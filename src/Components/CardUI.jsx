import React from "react";
import './CardStyle.css';

// card-img-top

const CardUI = (props) => {
    return (
        <>
        {console.log('inside card')}
        <div className="container d-flex justify-content-center align-items-center " style={{width:"400px"}}>
            <div className="card text-center shadow m-1">
                <div className="overflow d-flex justify-content-center align-items-center" style={{flexDirection:"column", position:"relative"}}>
                    <img src={props.src} alt="" className="img-fluid  p-0 mt-3" width="220" height="150" style={{display:"block", ObjectFit:"cover",objectPosition:"center center", width:"250px", height:"300px"}}/>
                    <a href={props.linkedin} target="_blank"><i class="fab fa-linkedin " style={{zIndex:"1", color:"#00acee", padding:'8px', background:"#fff", borderRadius:"50%",position:"absolute" ,bottom:"-10%", left:"44%",fontSize: "25px"}}></i></a>
                </div>
                <div className="card-body pt-0 mt-0 text-dark">
                    
                    <h4 className="card-title p-0 m-0">{props.title}</h4>
                    <p className="text-secondary">{props.position}</p>
                    <p><span><a href={props.github} target="_blank"><i className="fab fa-github fa-2x pl-3"></i></a></span> <span><a href={props.twitter} target="_blank"><i className="fab fa-twitter fa-2x pl-3"></i></a></span> <span><a href={props.insta} target="_blank"><i className="fab fa-instagram fa-2x pl-3"></i></a></span></p>
                </div>
            </div>
            </div>
        </>
    );
}

export default CardUI;