import React, { Component } from 'react';

import PortfolioFixed from './components/PortfolioFixed';
import PortfolioContent from './components/PortfolioContent';

class App extends Component {
  render() {
    const { skills, eduList, jobsList} = this.props
    return (
      <div id="app-container">
        <PortfolioFixed/>
        <PortfolioContent skills={skills} eduList={eduList} jobsList={jobsList} />
      </div>
    );
  }
}

export default App;
