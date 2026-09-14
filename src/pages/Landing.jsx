import React from "react";
import "../Styles/Landing.css";
import "../Styles/Grid.css";
import WatkinsPhoto from "../assets/photos/Watkins_Chris_02.jpg";

function Landing() {
  return (
    <div className=" landing landingGrid ">
      <div className="landingTitle glass-content">
        <span className={" glass-title"}>Howdy, I'm</span>
        <h1 className={" glass-title "}>Christopher Watkins</h1>
      </div>
      <div className="landingSubTitle glass-content">
        <h2 className={"box landingGrid-title-text glass-title"}>
          Full-Stack Engineer & Creative Developer
        </h2>
        <span className={"sub-matrix-text glass-title"}>
          SYSTEM_ARCH// CLIENT_UI
        </span>
      </div>
      <div className="landingImage ">
        <img className={"box landingGrid-image glass-content "} src={WatkinsPhoto} />
      </div>

      <div className="landingBadges glass-content">
        <span className="landingBadge"></span>
        <span className="landingBadge"></span>
        <span className="landingBadge"></span>
        <span className="landingBadge"></span>
      </div>
      <div className="landingManifesto">
      <p className={"primary-manifesto"}>
        Here to build beautiful, usable projects.
      </p>
      <p className={"call-to-action"}>
        Let's build something amazing together.
      </p>
      </div>
    </div>
  );
}

export default Landing;
