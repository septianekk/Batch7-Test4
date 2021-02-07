import React, { Component } from "react";
class Skill extends Component {
  render() {
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-skills">
          <div className="section-skills">
            {/* <!-- Section title --> */}
            <h2 className="section-title">SKILLS</h2>
            {/* <!-- /Section title -->

	            <!-- Subtitle --> */}
            <h3 className="section-item-title-2">
              <i className="fa fa-users"></i>&nbsp;&nbsp; Professional Skills
            </h3>
            {/* <!-- /Subtitle -->

				<!-- Skils List --> */}
            <ul className="skills-list">
              {/* <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    data-percent="80%"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete</span>
                  </div>
                  <span className="progress-type">Comunication</span>
                  <span className="progress-completed">80%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-2"
                    role="progressbar"
                    data-percent="70%"
                    style={{ width: "70%" }}
                  >
                    <span className="sr-only">70% Complete</span>
                  </div>
                  <span className="progress-type">Leadership</span>
                  <span className="progress-completed">70%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress" title="Doing my best!">
                  <div
                    className="progress-bar progress-bar-3"
                    role="progressbar"
                    data-percent="85%"
                    style={{ width: "85%" }}
                  >
                    <span className="sr-only">85% Complete</span>
                  </div>
                  <span className="progress-type">Confidence</span>
                  <span className="progress-completed">85%</span>
                </div>
              </li>
              {/* <!-- /item list --> */}
            </ul>
            {/* <!-- /Skils List -->

				 <!-- Subtitle --> */}
            <h3 className="section-item-title-2">
              <i className="fa fa-laptop"></i>&nbsp;&nbsp; Software Skills
            </h3>
            {/* <!-- /Subtitle -->

				<!-- Skils List --> */}
            <ul className="skills-list">
              {/* <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-percent="80%"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete</span>
                  </div>
                  <span className="progress-type">Adobe XD</span>
                  <span className="progress-completed">80%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-2"
                    data-percent="80%"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete</span>
                  </div>
                  <span className="progress-type">Figma</span>
                  <span className="progress-completed">80%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-3"
                    data-percent="60%"
                    role="progressbar"
                    style={{ width: "60%" }}
                  >
                    <span className="sr-only">60% Complete</span>
                  </div>
                  <span className="progress-type">Adobe Photoshop</span>
                  <span className="progress-completed">60%</span>
                </div>
              </li>
              {/* <!-- /item list --> */}
            </ul>
            {/* <!-- /Skils List -->

				 <!-- Subtitle --> */}
            <h3 className="section-item-title-2">
              <i className="fa fa-code"></i>&nbsp;&nbsp; Code Skills
            </h3>
            {/* <!-- /Subtitle -->

				<!-- Skils List --> */}
            <ul className="skills-list">
              {/* <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar"
                    data-percent="80%"
                    role="progressbar"
                    style={{ width: "80%" }}
                  >
                    <span className="sr-only">80% Complete</span>
                  </div>
                  <span className="progress-type">HTML5 / CSS3</span>
                  <span className="progress-completed">80%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-2"
                    data-percent="75%"
                    role="progressbar"
                    style={{ width: "75%" }}
                  >
                    <span className="sr-only">75% Complete</span>
                  </div>
                  <span className="progress-type">Javascript</span>
                  <span className="progress-completed">75%</span>
                </div>
              </li>
              {/* <!-- /item list -->
                    <!-- item-list --> */}
              <li>
                <div className="progress">
                  <div
                    className="progress-bar progress-bar-3"
                    data-percent="70%"
                    role="progressbar"
                    style={{ width: "70%" }}
                  >
                    <span className="sr-only">40% Complete</span>
                  </div>
                  <span className="progress-type">PHP</span>
                  <span className="progress-completed">70%</span>
                </div>
              </li>
              {/* <!-- /item list --> */}
            </ul>
            {/* <!-- /Skils List --> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Skill;
