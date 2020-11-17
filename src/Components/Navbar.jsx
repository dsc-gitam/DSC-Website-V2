import React from "react";

const Navbar = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg fixed-top navbar-light " style={{backgroundColor:"#fff",borderBottom:"0.2px solid #F0F0F0"}}>
                <div class="container" >
                    <a class="navbar-brand" href="#"><img src="/Images/logo.png" alt="" width="200" height="50" /></a>
                    <button class="navbar-toggler custom-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
                    
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="/#home">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#technologies">Technologies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#events">Events</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" target="__blank" href="https://hack101.netlify.app/">Hack 101</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/#faq">FAQ</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/team">Team</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link btn-style" href="https://dsc.community.dev/gandhi-institute-of-technology-and-management-visakhapatnam-campus/" target="__blank">Join Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav> 
        </div>
    )
}

export default Navbar;