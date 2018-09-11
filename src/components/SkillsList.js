import React, {Component} from 'react'
import Skill from './Skill';

class SkillsList extends Component {
  render() {
    const { skills } = this.props
    return (
      <section>
        <h4>Skills</h4>
        <div className="skills-list">
          {skills.map (skill => (
            <Skill key={skill} skill={skill}/>
          ))}
        </div>
      </section>
    )
  }
}

export default SkillsList;
