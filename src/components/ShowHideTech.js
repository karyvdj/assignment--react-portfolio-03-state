import React, { Component } from 'react';


class ShowHideTech extends Component {
  state = {
    isVisible: false
  };

  handleClick = () => {
    console.log("click")
    this.setState({
      isVisible: !this.state.isVisible
    }); 
  };
 
  render() {

    const techlistHiddenClassname = `techlist--hidden`
    const techlistVisibleClassname = `techlist--visible`

    let techlistStatus = techlistHiddenClassname

    return (
      <section>
        <h4>Technologies</h4>
        <button className="toggle-techlist" onClick={this.handleClick}>+ Show Tech</button>
        
          <div className={`techlist ${this.state.isVisible ? techlistVisibleClassname : techlistStatus }`}>
            <span className="techlist__icon devicons devicons-github_badge"/>
            <span className="techlist__icon devicons devicons-git"/>
            <span className="techlist__icon devicons devicons-html5"/>
            <span className="techlist__icon devicons devicons devicons-css3"/>
            <span className="techlist__icon devicons devicons-sass"/>
            <span className="techlist__icon devicons devicons-linux"/>
            <span className="techlist__icon devicons devicons devicons-nodejs"/>
            <span className="techlist__icon devicons devicons devicons-react"/>
            <span className="techlist__icon devicons devicons devicons-illustrator"/>
          </div>
        
      </section>
    );
  }
}

export default ShowHideTech
