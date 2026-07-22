import React from "react";
import "../Styles/Glass.css";

function Glass() {
  return (
    <div className="glass">
      {/* Parallax Hero Layer (No background image file needed, uses CSS gradient) */}
      <section className="glass-parallax-background">
        {/* Outer Frosted Glass Circle (Central Badge) */}
        <div className="glass-background">
          {/* Inner Secondary-Colored Circle */}
          <div className="glass-content">
            <p className="glass-title">Glass Effect Background</p>
          </div>
        </div>
      </section>

      {/* Main Content Scrolling Wrapper with 3D Depth enabled */}
      <div className="glass-wrapper">
        {/* Deep background layer: tracking slow like a horizon sun */}
        <section className="glass-content section1">
          <h1>Glass Effect 1</h1>
          <p>
            Deep background layer. Moves exceptionally slow over the gradient
            layout.
          </p>
        </section>

        {/* Midground layer: tracks like soft distant clouds */}
        <section className="glass-content section2">
          <h1>Glass Effect 2</h1>
          <p>
            Midground layer tracking comfortably behind foreground components.
          </p>
        </section>

        {/* Foreground layer: standard scroll timeline speed */}
        <section className="glass-content section3">
          <h1>Glass Effect 3</h1>
          <p>
            Standard foreground element moving at a literal 1:1 scroll speed
            match.
          </p>
        </section>

        {/* Deep foreground layer: glides past everything else as you scroll */}
        <section className="glass-content section4">
          <h1>Glass Effect 4</h1>
          <p>
            Pops out closer to the screen perspective, passing layers below it.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Glass;
