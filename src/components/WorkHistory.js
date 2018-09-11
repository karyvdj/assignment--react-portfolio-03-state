import React, {Component} from 'react'
import Job from './Job';

class WorkHistory extends Component {
  render() {
    console.log(this.props.jobsList);
    /* receive `jobsList` array as props from App compnonent */
    const { jobsList } = this.props
    return (
      <section>
        <h4>Work Experience</h4>
        <div className="skills-list">
          { jobsList.map(job => (
            <Job key={job.title} job={job}/>
          ))}
        </div>
      </section>
    )
  }
}

export default WorkHistory;
