import React from 'react';
import './Education.scss';

class Education extends React.Component {
    render() {
        return <div>
                <span className= "year">{this.props.info.year}</span>
                <div className ="block">
                    <p className= "info">{this.props.info.info}</p>
                    <p className= "detale">{this.props.info.detale}</p>
                </div>
            </div>
    }
}

export default Education;
