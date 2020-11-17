import React from "react";
import Navbar from "./Navbar";
import Team from "./Team";
import Footer from "./Footer";
import { Col, Row, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import {Link, useHistory} from "react-router-dom"


export const MainPage = () => {
  const history=useHistory();
  return (
    <div>
      {/* ---------- header ---------  */}
      <div
        id="home"
        className="main-header mb-5 align-items-center"
        style={{
          height: "100% !important",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div
              className="col-md-6 col-12 d-flex align-items-center justify-content-center"
              style={{ flexDirection: "column" }}
            >
              <h4 className="text-left main-head">
                Developer Student Club Gitam Deemed to be University .
              </h4>
              <p className="mt-3 text-left main-para lead">
                Developer Student Clubs is a{" "}
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-warning">o</span>
                <span className="text-primary">g</span>
                <span className="text-success">l</span>
                <span className="text-danger">e</span> Developers program for
                university students to learn trending technologies like{" "}
                <span className="text-danger">ML/AI</span>,{" "}
                <span className="text-primary">Cloud-Computing</span>,{" "}
                <span className="text-success">Andriod</span> and{" "}
                <span className="text-primary">Web developement</span> skills
                ,design thinking skills and leadership skills and many more.
              </p>
              <button className="btn align-self-start member-btn">
                <i className="fas fa-users text-white"></i>{" "}
                <a
                  href="https://dsc.community.dev/gandhi-institute-of-technology-and-management-visakhapatnam-campus/"
                  target="__blank"
                  style={{ color: "white" }}
                >
                  Become a memeber
                </a>
              </button>
            </div>
            <div className="col-md-6 col-12">
              <img
                src="/Images/home-img.png"
                alt="home-img"
                className="img-fluid side-img mt-2"
                width="480"
                height="200"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down  */}
      <div className="hero ">
        <a href="#" className="scroll-down">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>

      {/* ------ Opportunities section  ------- */}
      <div class="container my-5">
        <h3 class="text-center">Opportunities DSCs provide students with</h3>
        <div class="row align-items-center justify-content-center mt-5">
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Grow their knowledge on
                developer technologies and more through peer to peer workshops
                and events.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Grow their knowledge on
                developer technologies and more through peer to peer workshops
                and events.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center justify-content-center mt-1">
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Grow their knowledge on
                developer technologies and more through peer to peer workshops
                and events.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Grow their knowledge on
                developer technologies and more through peer to peer workshops
                and events.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Techonologies we are working on  */}
      <div id="technologies" className="tech-sec p-3 m-2">
        <div className="container ">
          <h3>Technologies We're Excited About</h3>
          <p className="pb-4">
            Opportunities to learn & access deep technical content.
          </p>

          <div className="row mb-5 bg-light ">
            <div className="col-lg-6 col-12">
              <img src="/Images/ml.png" alt="ml" img="img-fluid" width="300" />
            </div>
            <div
              className="col-lg-6 col-12 text-left d-flex justify-content-center"
              style={{ flexDirection: "column" }}
            >
              <h3>Machine Intelligence</h3>
              <p>
                Learn how to drive user engagement and retention with
                intelligent apps that are able to effectively serve users what
                they need without the fuss by providing these systems with the
                ability to automatically learn and improve from experience
                without being explicitly programmed.
              </p>
              <button className="btn techbtn" style={{ width: "25%" }}>
                <a style={{ color: "white" }} href="http://bit.ly/dscDiscord">
                  Join Discord{" "}
                  <i class="fab fa-discord pl-1" style={{ color: "white" }}></i>
                </a>
              </button>
            </div>
          </div>

          <div className="row mb-5 pt-4 pb-4">
            <div
              className="col-lg-6 col-12 text-left d-flex justify-content-center mb-2 "
              style={{ flexDirection: "column" }}
            >
              <h3>Android Development</h3>
              <p>
                Every year Google developers release exciting new updates to the
                world's most popular operating system. We always have sessions
                to keep you updated and mastering the latest trends in modern
                Android development.
              </p>
              <button className="btn techbtn" style={{ width: "25%" }}>
                <a style={{ color: "white" }} href="http://bit.ly/dscDiscord">
                  Join Discord{" "}
                  <i class="fab fa-discord pl-1" style={{ color: "white" }}></i>
                </a>
              </button>
            </div>
            <div className="col-lg-6 col-12">
              <img
                src="/Images/andriod-dev.png"
                alt="ml"
                img="img-fluid"
                width="300"
              />
            </div>
          </div>

          <div className="row mb-5 bg-light pt-4 pb-4">
            <div className="col-lg-6 col-12">
              <img
                src="/Images/web-dev.png"
                alt="web-dev"
                img="img-fluid"
                width="300"
              />
            </div>
            <div
              className="col-lg-6 col-12 text-left d-flex justify-content-center"
              style={{ flexDirection: "column" }}
            >
              <h3>Web Development</h3>
              <p>
                Learn the core foundations of a delightful web experience both
                for the user and developer. Stay up to tabs with emerging and
                trending technologies. Get access to a guided, tutorial and
                hands-on coding experience.
              </p>
              <button className="btn techbtn" style={{ width: "25%" }}>
                <a style={{ color: "white" }} href="http://bit.ly/dscDiscord">
                  Join Discord{" "}
                  <i class="fab fa-discord pl-1" style={{ color: "white" }}></i>
                </a>
              </button>
            </div>
          </div>

          <div className="row mb-5 pt-4 pb-4">
            <div
              className="col-lg-6 col-12 text-left d-flex justify-content-center mb-2 "
              style={{ flexDirection: "column" }}
            >
              <h3>Cloud Computing</h3>
              <p>
                For passionate developers who want to stay relevant in a cloud
                first world where businesses demand for agility and innovation
                and prompt rise of cloud-native applications to bridges gaps
                between data, insight, and action.
              </p>
              <button className="btn techbtn" style={{ width: "25%" }}>
                <a style={{ color: "white" }} href="http://bit.ly/dscDiscord">
                  Join Discord{" "}
                  <i class="fab fa-discord pl-1" style={{ color: "white" }}></i>
                </a>
              </button>
            </div>
            <div className="col-lg-6 col-12">
              <img src="/Images/cp.png" alt="ml" img="img-fluid" width="300" />
            </div>
          </div>
        </div>
      </div>

      {/* --------- Events ---------  */}

      <div id="events" className="event-sec m-5" style={{position:"relative",paddingBottom:"35px"}}>
      <div className="container">
          <h3 className="text-center">Events & Workshops</h3>
          <p className="text-center">
            Come learn, share and connect with us in person.
          </p>
          <button className="btn techbtn" onClick={()=>{history.push('/events')}} style={{ width: "25%",position:"absolute",left:"37.5%",right:"37.5%",marginTop:"10px"}}>
                <a style={{ color: "white" }} >
                  View Our Events
                </a>
              </button>
        </div>
      </div>

      <div id="team" className="team">
        <Team />
      </div>

      {/* ----------- FAQ ----------  */}
      <div id="faq" className="faq bg-light">
        <div className="container bg-light mb-3">
          <h4 className="text-center pt-5 pb-4">Frequently Asked Questions</h4>
          <div class="row pb-5">
            <div className="col-lg-6 col-12">
              <h5 className="text-left">Who can become a member?</h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                The clubs is open to any student, ranging from novice developers
                who are just starting, to advanced developers who want to
                further their skills.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <h5 className="text-left">
                How frequently do events and workshops occur?
              </h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                We have a hands-on session every Tuesday at SG25 from 1800hrs to
                2030hrs. We also hold workshops and showcases & we would
                recommend you to join our community on Meetup to get updates.
              </p>
            </div>
          </div>

          <div class="row">
            <div className="col-lg-6 col-12">
              <h5 className="text-left">Who can become a member?</h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                The clubs is open to any student, ranging from novice developers
                who are just starting, to advanced developers who want to
                further their skills.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <h5 className="text-left">
                How frequently do events and workshops occur?
              </h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                We have a hands-on session every Tuesday at SG25 from 1800hrs to
                2030hrs. We also hold workshops and showcases & we would
                recommend you to join our community on Meetup to get updates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
