import Home from "./Home";
import Navbar from "./Navbar";
import Resume from "./Resume";
import React, { Component } from "react";
import Skill from "./Skill";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Blog from "./Blog";
import BlogData from "./BlogData";

export default class HomePage extends Component {
  render() {
    return (
      <section id="body">
        <div className="container">
          <Navbar />
          <Home />
          <Resume />
          <Skill />
          <Portfolio />
          <Blog />
          <BlogData />
          <Contact />
        </div>
      </section>
    );
  }
}
