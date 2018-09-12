import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import Project from './Project';

class FilterProjects extends Component {
  constructor() {
    super();
    this.state = {
      filterType: 'all'
    }
  }
  handleFilterClick(filter) {
    console.log("click")
    this.setState({
      filterType: filter
    });
  }
  
  
  render() {
    const { allClassName, teamClassName, soloClassName, filterType} = this.state

    let filterListProjects = projectData.filter(project => {
      if (filterType === "all") return true;
      if (project.solo === true && filterType === 'true') return true;
      if (project.solo === false && filterType === 'false') return true;
    });
    
    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className="project-type project-type--all project-type--selected" onClick={() => this.handleFilterClick('all')}>
              All
            </span>

            <span data-ptype="solo" className="project-type project-type--solo" onClick={() => this.handleFilterClick('true')}>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className="project-type project-type--team" onClick={() => this.handleFilterClick('false')}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>
            
            {filterListProjects.map (project => (
              <Project key={project.projectName} project={project}/>
            ))}

          </div>
        </section>
    );
  }
}

export default FilterProjects
