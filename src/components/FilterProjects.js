import React, { Component } from 'react';
import { projectData } from '../data/datasource'
import Project from './Project';

/*  Advice:
   (2) add an onClick event listener to the  <span> elements in .project-types-list
        that calls a method to change the FilterProjects component state to the selected
        view,

        Note: you will want to set the component's initial state in the
              constructor() function

   (3) Use .filter() to render the `projectData` based on FilterProjects
       component state

       Hint: you may want to use .filter() depending on the  then .map()


 */

class FilterProjects extends Component {
state={
  
}

  render() {
    const projectSelectedClassVal = 'project-type--selected'

    let allSelectedRenderedClass = projectSelectedClassVal
    let soloSelectedRenderedClass = ''
    let teamSelectedRenderedClass = ''

    // change value of 'let' variables based on component state for whether
    //'all', 'team', or 'solo' is selected
    // --

    return (
      <section>
          <h4>Projects</h4>

          <div className="project-types-list">
            <span data-ptype="all" className={`project-type project-type--all ${allSelectedRenderedClass}`}>
              All
            </span>

            <span data-ptype="solo" className={`project-type project-type--solo ${soloSelectedRenderedClass}}`}>
              <i className="ion-person"></i>Solo
            </span>

            <span data-ptype="team" className={`project-type project-type--team ${teamSelectedRenderedClass}`}>
              <i className="ion-person-stalker"></i>Team
            </span>
          </div>

          <div className='projects-list'>

            {projectData.map (project => (
              <Project key={project.projectName} project={project}/>
            ))}

          </div>
        </section>
    );
  }
}

export default FilterProjects
