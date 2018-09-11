
import React, {Component} from 'react'

class Job extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="job">
        <div className="job__years">
          <h6 className="job__end">{this.props.job.years.end}</h6>
          <h6 className="job__start">{this.props.job.years.start}</h6>
        </div>

        <h5 className="job__title">{this.props.job.title}</h5>
        <h5 className="job__company">{this.props.job.company}</h5>
        <p className="job__description">{this.props.job.description}</p>
      </div>
    );
  }
}

export default Job
