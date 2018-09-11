import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/styles.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { skills, eduList, jobsList} from './data/datasource';

ReactDOM.render(<App skills={skills} eduList={eduList} jobsList={jobsList}/>, document.getElementById('root'));
registerServiceWorker();
