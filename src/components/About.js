import React from "react";
import { image } from "../data/data";

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>I am a senior Developer with over seven years of experience in Ruby on Rails</p>
    <img
      src={image} alt="I made this"
      />
  </div>
  );
}

export default About;
