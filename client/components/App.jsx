import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import MainLayout from './main-layout/MainLayout.jsx';
import HomeView from './home-view/HomeView.jsx';
import RecordView from './record-view/RecordView.jsx';
import SessionsView from './sessions-view/SessionsView.jsx';
import AllReports from './report-view/AllReports.jsx';
import ReportView from './report-view/ReportView.jsx';
import SettingsView from './settings-view/SettingsView.jsx';
import TextAnalysisView from './report-view/TextAnalysisView.jsx';
import ConceptView from './report-view/ConceptView.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={MainLayout}>
          <IndexRoute component={HomeView} />
          <Route path="record" component={RecordView} />
          <Route path="sessions" component={SessionsView} />
          <Route path="allreports/:sessionId" component={AllReports} >
            <Route path="reports" component={ReportView} />
            <Route path="textAnalysis" component={TextAnalysisView} />
            <Route path="concepts" component={ConceptView} />
          </Route>
          <Route path="settings" component={SettingsView} />
        </Route>
      </Router>
    )
  }
}