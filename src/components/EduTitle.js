import React, {Component} from 'react'

class EduTitle extends Component {
  render() {
    this.props.dates
    this.props.institute
    return (
      <div className="degree">
       <h5 className="degree__institute">{this.props.item.institute}</h5>
       <p className="degree__field">{this.props.item.fieldOfStudy}</p>
       <p className="degree__dates">{this.props.item.dates}</p>
     </div>
    );
  }
}

export default EduTitle
