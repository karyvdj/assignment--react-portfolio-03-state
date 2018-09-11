import React, { Component } from 'react';

import Header from './Header';
import Summary from './Summary';
import ContactInfo from './ContactInfo';
import SkillsList from './SkillsList';
import EducationHistory from './EducationHistory';
import WorkHistory from './WorkHistory';
import ShowHideTech from './ShowHideTech';
import FilterProjects from './FilterProjects';

class PortfolioContent extends Component {
    render() {
        const { skills, eduList, jobsList} = this.props
        return (
            <div className="portfolio-content">
                
                <Header/>

                <Summary/>

                <section>
                    <ContactInfo/>
                </section>
                
                <SkillsList skills={skills}/>
                
                <EducationHistory eduList={eduList}/>

                <WorkHistory jobsList={jobsList}/>

                <ShowHideTech/>

                <FilterProjects/>

            </div>
        )  
    }
}

export default PortfolioContent