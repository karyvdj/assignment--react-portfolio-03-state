import React, { Component } from 'react';


class Project extends Component {

  render() {
    const { projectName, solo } = this.props.project

    const soloProjectClassName = 'project--solo'
    const teamProjectClassName = 'project--team'

    let renderedClassVal = solo ? soloProjectClassName : teamProjectClassName;
    

    return (
      <div className={`project ${renderedClassVal}`}>
        <span className="project__title">{projectName}</span>
      </div>
    );
  }
}


export default Project
