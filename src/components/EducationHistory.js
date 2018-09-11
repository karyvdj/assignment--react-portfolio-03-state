import React, {Component} from 'react'
import EduTitle from './EduTitle';

// import EduTitle component

class EducationHistory extends Component {

  renderList(eduList) {
    const list = eduList.map(item => {
      return <EduTitle key={item.institute} item={item} />;
    });
    return list;
  }

  render() {   
    return (
      <section>
        <h4>Education</h4>
        <div className="skills-list">

          {this.renderList(this.props.eduList)}

        </div>
      </section>
    )
  }
}

export default EducationHistory;
