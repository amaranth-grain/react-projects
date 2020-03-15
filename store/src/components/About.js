import React from "react";
import Title from "./Title";
import Navbar from "./Navbar";
import {aboutMe} from "../data";

class About extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container py-5 divAbout">
          <Title title="about me" />
          <div className="row text-center">
            <div className="col-xs-8 col-md-6 col-lg-4 py-0 animated fadeIn aboutMe">
              <img
                src={aboutMe.imgPath}
                alt="profile pic"
                className="img-fluid"
                id="profilePic"
              />
            </div>
            <div className="col-xs-8 col-md-6 col-lg-7 text-left my-auto vertical-center animated fadeIn aboutMe">
              {aboutMe.about.map(p => {
                return <p>{p}</p>
              })}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default About;
