import React, { Component } from "react";

export default class Contact extends Component {
  render() {
    return (
      <div>
        {/* SECTION: CONTACT*/}
        <div className="section-vcardbody section-page" id="page-contact">
          <div className="section-contact">
            {/* Section title */}
            <h2 className="section-title">Contact</h2>
            {/* /Section title */}
            <div className="map">
              <div className="map-overlay" />
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d701.1221893699936!2d106.83023550920795!3d-6.24447762762379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c4c15248d9%3A0xbeb5a7f70d05d56c!2sJl.%20K%2C%20RT.6%2C%20Mampang%20Prpt.%2C%20Kec.%20Mampang%20Prpt.%2C%20Kota%20Jakarta%20Selatan%2C%20Daerah%20Khusus%20Ibukota%20Jakarta%2012790!5e0!3m2!1sid!2sid!4v1612683530341!5m2!1sid!2sid"
                height={250}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            {/* Contact infos */}
            <div className="contact-infos">
              <h4 className="contact-subtitle-1">
                <i className="fa fa-map" />
                &nbsp; Address
              </h4>
              <p>Jalan K Mampang prapatan 4 Gg. Swadaya RT.04 RW.07</p>
              <h4 className="contact-subtitle-1">
                <i className="fa fa-phone-square" />
                &nbsp; Phone
              </h4>
              <p>+62 822 4099 7379</p>
              <h4 className="contact-subtitle-1">
                <i className="fa fa-envelope" />
                &nbsp; Mail
              </h4>
              <p>septianekokuncahyono@gmail.com</p>
            </div>
            {/* /Contact infos */}
            {/* Contact form */}
            <h4 className="contact-subtitle-1">
              <i className="fa fa-paper-plane-o" />
              &nbsp; Send Me a Message
            </h4>
            <form id="contactForm" method="post" className="form">
              {/* Form Field */}
              <div className="form-group">
                <input
                  className="form-control required"
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                />
              </div>
              {/* /Form Field */}
              {/* Form Field */}
              <div className="form-group">
                <input
                  className="form-control required"
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  required
                />
              </div>
              {/* /Form Field */}
              {/* Form Field */}
              <div className="form-group">
                <input
                  className="form-control required"
                  id="subject"
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              {/* /Form Field */}
              {/* Form Field */}
              <div className="form-group">
                <textarea
                  className="form-control required"
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={5}
                  required
                  defaultValue={""}
                />
              </div>
              {/* /Form Field */}
              {/* Form Field */}
              <div className="form-group">
                <input
                  type="submit"
                  className="btn btn-default form-send"
                  defaultValue="Send!"
                />
              </div>
              {/* /Form Field */}
            </form>
            {/* /Contact Form */}
          </div>
        </div>
        {/* /SECTION: CONTACT  */}
      </div>
    );
  }
}
