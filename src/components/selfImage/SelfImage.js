import React, { Component } from 'react';
import SIcon from '../../assets/avatar.jpg'
import './SelfImage.scss';

class SelfImage extends Component {
    constructor(props){
        super(props);
        this.imgsrc = SIcon
    }
    render() {
        return <img src={this.imgsrc} alt='Self Introduce' className="selfimg"/>
    }
}

export default SelfImage;
