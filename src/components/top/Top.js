import React, { Component } from 'react';
import SlefImage from '../selfImage/SelfImage'
import './Top.scss';

class Top extends Component {
  constructor(props){
    super(props);
    this.hello = "HELLO,"
    this.say = "MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV"
}
  render() {
    return <div id="top" className="top">
        <SlefImage />
        <h2 className="hello">{this.hello}</h2>
        <p className="say">{this.say}</p>
        <div class="link-bottom"></div>
    </div>;
  }
}

export default Top;
