import React, { Component } from 'react';
import Education from "../education/Education"
import './Bottom.scss';

class Bottom extends Component {
  constructor(props){
    super(props);
    this.status = {
      about: "ABOUT ME",
      about_detale: "Lorem ipsum dolor sit amet, consectetur elit. Repellendus, non dolorem, cumque distinctio magni expedita velit laborum sunt amet facere tempora ut fuga aliquam ad asperiores voluptatem dolorum! Quasi.",
      education: "EDUCATION",
      educationlist: [
        { year: "1990",
          info: "I was born in Katowice",
          detale: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente, exercitationem, totam, dolores iste dolore est aut modi."
        },
        {
          year: "2005",
          info: "Secondary school specializing in artistic",
          detale: "Eos, explication, nam tenetur et ab eius desernunt aspernatur ipsum ducimus quibusdam quis voluptatibus."
        },
        {
          year: "2009",
          info: "First level graduation in Graphic Design",
          detale: "Aspernatur, mollitia, quos maxime elus suscipit sed beatea ducimus quaerat quibusdam perferendis? Iusto, quibusdam asperiores unde repellat."
        },
        {
          year: "2012",
          info: "Second level graduation in Graphic Design",
          detale: "Ducimus, aliquam tempore autem itaque et accusantium!"
        }
      ]
    }
}
  render() {
    return <div id="bottom" className="bottom">
      <h2 className="about">{this.status.about}</h2>
      <p>{this.status.about_detale}</p>
      <h2 className="education">{this.status.education}</h2>
      {
        this.status.educationlist.map(educationinfo=><Education info={educationinfo} />)
      }
      </div>
  }
}

export default Bottom;
