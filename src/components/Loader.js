import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    nama: state.homeReduce.nama,
    job: state.homeReduce.job,
  };
};

class Loader extends Component {
  render() {
    return (
      <div className="loader-container" id="page-loader">
        <div className="loading-wrapper">
          <div className="loader-animation" id="loader-animation">
            <span className="loader">
              <span className="loader-inner" />
            </span>
          </div>

          {/* Edit With Your Name */}
          <div className="loader-name" id="loader-name">
            {this.props.nama}
          </div>
          {/* /Edit With Your Name */}

          {/* Edit With Your Job */}
          <p className="loader-job" id="loader-job">
            {this.props.job}
          </p>
          {/* /Edit With Your Job */}
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Loader);
