import React from "react";
import Navbar from "./Navbar";
// import Team from "./Team";
import Footer from "./Footer";
import { Col, Row, Button } from "reactstrap";
import { Redirect } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";

export const MainPage = () => {
  const history = useHistory();
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
                Developer Student Club, GITAM Deemed to be University 👋
              </h4>
              <p className="mt-3 text-left main-para lead">
                Developer Student Clubs is a{" "}
                <span className="text-primary">G</span>
                <span className="text-danger">o</span>
                <span className="text-warning">o</span>
                <span className="text-primary">g</span>
                <span className="text-success">l</span>
                <span className="text-danger">e</span> Developers program for
                university students to learn and practice trending technologies
                like <span className="text-danger">ML/AI</span>,{" "}
                <span className="text-primary">Cloud-Computing</span>,{" "}
                <span className="text-success">Andriod</span> ,{" "}
                <span className="text-primary">Web developement</span> and
                leverage these potential tools to build strategic solutions for
                the community!
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
        <a href="#opportunities" className="scroll-down">
          <div className="mouse">
            <span></span>
          </div>
          <div className="arrow">
            <span></span>
          </div>
        </a>
      </div>

      {/* ------ Opportunities section  ------- */}
      <div class="container my-5 " id="opportunities">
        <h3 class="text-center">Hamlet of Oppurtunities! ⛹️</h3>
        <div class="row align-items-center justify-content-center mt-5">
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Learn-Practice-Create
                potential solutions that impacts the envrionment around you!
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Connect and build your
                network with like minded people, a platform to share and seek
                ideas.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center justify-content-center mt-1">
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> We believe in channelizing
                ideas through work, visualise the aspects by taking part in
                numerous Hackathons conducted throughout the year.
              </p>
            </div>
          </div>
          <div class="col-sm-6">
            <div class=""></div>
            <div class="card-body">
              <p>
                <i class="fas fa-angle-right"></i> Grow your knowledge on
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
          <h3 className="text-center">Technologies We're Excited About</h3>
          <p className="pb-4 text-center">Learn and Build with DSC! 🏗️</p>

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
                <a
                  style={{ color: "white" }}
                  href="https://discord.com/invite/KCBcf5V833?ltclid=2413d924-5457-4ab4-aa9b-19d12dcc9a5a"
                >
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
                <a
                  style={{ color: "white" }}
                  href="https://discord.com/invite/KCBcf5V833?ltclid=2413d924-5457-4ab4-aa9b-19d12dcc9a5a"
                >
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
                <a
                  style={{ color: "white" }}
                  href="https://discord.com/invite/KCBcf5V833?ltclid=2413d924-5457-4ab4-aa9b-19d12dcc9a5a"
                >
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
                <a
                  style={{ color: "white" }}
                  href="https://discord.com/invite/KCBcf5V833?ltclid=2413d924-5457-4ab4-aa9b-19d12dcc9a5a"
                >
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

      <div
        id="events"
        className="event-sec m-5"
        style={{ position: "relative", paddingBottom: "35px" }}
      >
        <div className="container">
          <h3 className="text-center">Events & Workshops</h3>
          <p className="text-center">
            Come learn, share and connect with us in person.
          </p>
          <button
            className="btn techbtn"
            onClick={() => {
              history.push("/events");
            }}
            style={{
              width: "20%",
              position: "relative",
              left: "50%",
              top: "50%",
              transform: "translate(-50%,-50%)",
              marginTop: "20px",
            }}
          >
            <a style={{ color: "white" }}>View Our Events 🗓️</a>
          </button>
        </div>
      </div>

      {/* ----------- FAQ ----------  */}
      <div id="faq" className="faq bg-light">
        <div className="container bg-light mb-3">
          <h4 className="text-center pt-5 pb-4">
            Frequently Asked Questions ❓
          </h4>
          <div class="row pb-5">
            <div className="col-lg-6 col-12">
              <h5 className="text-left">Why should I join DSC?</h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                If you have a knack for building potential solutions and
                leveraging new technologies to explore the unexplored, then DSC
                is just the place to come to learn - build - grow with the
                community.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <h5 className="text-left">
                How frequently do events and workshops occur?
              </h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                We conduct a minimum of 2 events every month, in addition to our
                monthly hackathon HACK 101, the events are not constrainted to
                any particular year of students.
              </p>
            </div>
          </div>

          <div class="row">
            <div className="col-lg-6 col-12">
              <h5 className="text-left">Who can become a member?</h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                The clubs is open to any student, ranging from novice developers
                who are just starting, to advanced developers who want to
                further develop their skills.
              </p>
            </div>
            <div className="col-lg-6 col-12">
              <h5 className="text-left">
                How can I stay updated about the events?
              </h5>
              <p className="text-left lead" style={{ fontSize: "15px" }}>
                All the event news are available under the Events section of
                this site, one can also join our discord server to keep
                themselves updated about the same.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
