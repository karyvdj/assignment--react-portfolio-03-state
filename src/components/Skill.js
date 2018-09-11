import React, {Component} from 'react'

class Skill extends Component {
  render() {
    return (
      <span className="skills-list__single">
        {this.props.skill}
      </span>
    );
  }
}

export default Skill
