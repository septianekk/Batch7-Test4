import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    jurusan: state.resumeReduce.jurusan,
    campus: state.resumeReduce.campus,
    tahun: state.resumeReduce.tahun,
    desc: state.resumeReduce.desc,
    workExp: state.resumeReduce.workExp,
  };
};

class Resume extends Component {
  render() {
    return (
      <div>
        <div className="section-vcardbody section-page" id="page-resume">
          <div className="section-education">
            <h2 className="section-title">Resume</h2>

            <div className="resume-buttons header-page-buttons">
              <a href="#" className="btn btn-default btn-default2">
                <i className="fa fa-download"></i>&nbsp; Download my resume
              </a>

              <a
                href="#page-contact"
                className="btn btn-default btn-default2 link-page"
              >
                <i className="fa fa-download"></i>&nbsp; Get in Touch
              </a>
            </div>
            <h2 className="section-title2">
              <i className="fa fa-university" />
              &nbsp; Education
            </h2>
            <div className="resume-item">
              {/* Graduation title */}
              <h3 className="section-item-title-1">{this.props.jurusan}</h3>
              {/* /Graduation title */}
              {/* Graduation time */}
              <h4 className="graduation-time">{this.props.campus}</h4>
              {/* /Graduation time */}
              {/* content */}
              <div className="graduation-description">
                <p>{this.props.desc}</p>
              </div>
              {/* /Content */}
            </div>
          </div>
          <div className="section-education">
            <h2 className="section-title2">
              <i className="fa fa-flag" />
              &nbsp; Work Experience
            </h2>

            {this.props.workExp.map((work, i) => {
              return (
                <div className="resume-item" key={i}>
                  {/* Work Place */}
                  <h3 className="section-item-title-1">{work.company}</h3>
                  {/* /Work Place */}
                  {/* Job Time */}
                  <h4 className="job">
                    {work.position}{" "}
                    <span className="job-date">{work.tahun}</span>
                  </h4>
                  {/* /Job Time*/}
                  {/* content */}
                  <div className="graduation-description">
                    <p>{work.desc}</p>
                  </div>
                  {/* /Content */}
                </div>
              );
            })}

            {/* Resume Item */}

            {/* /Resume Item */}
          </div>
          <h2 className="section-title2">
            <i className="fa fa-commenting" />
            &nbsp; Testimonials
          </h2>

          {/* Testimonials */}
          <div className="testimonials">
            {/* Testimonial Slides */}
            <div className="testimonial-slides" id="testimonial-carousel">
              {/* item */}
              <div className="testimonial-item">
                {/* Testimonial Content */}
                <div className="testimonial-content">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat malesuada aliquet. Morbi vulputate nisl eget
                    adipiscing consequat. Cras arcu tortor, ornare vel libero
                    et, sagittis adipiscing leo. Aenean eget."
                  </p>
                </div>
                {/* /Testimonial Content */}
                {/* Testimonial Author */}
                <div className="testimonial-credits">
                  {/* picture */}
                  <div className="testimonial-picture">
                    <img
                      src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                      alt=""
                    />
                  </div>
                  {/* /picture */}
                  <p className="testimonial-author">Melissa Alvarez</p>
                  <p className="testimonial-firm">Trexus Co.</p>
                </div>
                {/* /Testimonial Author */}
              </div>
              {/* /item */}

              {/* item */}
              <div className="testimonial-item">
                {/* Testimonial Content */}
                <div className="testimonial-content">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat malesuada aliquet. Morbi vulputate nisl eget
                    adipiscing consequat. Cras arcu tortor, ornare vel libero
                    et, sagittis adipiscing leo. Aenean eget."
                  </p>
                </div>
                {/* /Testimonial Content */}
                {/* Testimonial Author */}
                <div className="testimonial-credits">
                  {/* picture */}
                  <div className="testimonial-picture">
                    <img
                      src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                      alt=""
                    />
                  </div>
                  {/* /picture */}
                  <p className="testimonial-author">John Rex</p>
                  <p className="testimonial-firm">DotRex Co.</p>
                </div>
                {/* /Testimonial Author */}
              </div>
              {/* /item */}

              {/* item */}
              <div className="testimonial-item">
                {/* Testimonial Content */}
                <div className="testimonial-content">
                  <p>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec consequat malesuada aliquet. Morbi vulputate nisl eget
                    adipiscing consequat. Cras arcu tortor, ornare vel libero
                    et, sagittis adipiscing leo. Aenean eget."
                  </p>
                </div>
                {/* /Testimonial Content */}
                {/* Testimonial Author */}
                <div className="testimonial-credits">
                  {/* picture */}
                  <div className="testimonial-picture">
                    <img
                      src="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
                      alt=""
                    />
                  </div>
                  {/* /picture */}
                  <p className="testimonial-author">Jhonathan Smith</p>
                  <p className="testimonial-firm">RedWings Co.</p>
                </div>
                {/* /Testimonial Author */}
              </div>
              {/* /item */}
            </div>
            {/* Testimonial Slides */}
          </div>
          <div className="page-footer">
            {/* Buttons */}
            <div className="resume-buttons">
              {/* Download CV button */}
              <a href="##" className="btn btn-default btn-default2">
                <i className="fa fa-download" />
                &nbsp; Download my resume
              </a>
              {/* /Download CV button */}
              {/* Get in Touch button */}
              <a
                href="#page-contact"
                className="btn btn-default btn-default2 link-page"
              >
                <i className="fa fa-download" />
                &nbsp; Get in Touch
              </a>
              {/* /Get in Touch button */}
            </div>
            {/* /Buttons */}
            {/* Quote */}
            <p className="footer-quote">
              "Life is beautiful. Just enjoy it" <br />
              <i>-</i>
            </p>
            {/* /Quote */}
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Resume);
