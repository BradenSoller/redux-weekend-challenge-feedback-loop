import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AddFeeling from '../feelingRatings';
import UnderstandingRating from '../understandRating';
import SupportRating from '../SupportRating';
import Comment from '../comments';
import FeedbackReview from '../reveiwPage';
import ResetFeedback from '../thanks/reset-page';
import StartOver from '../finishPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Feedback!</h1>
        <h4>Don't forget it!</h4>
      </header>
      <Router>
        <Route exact path ="/">
          <AddFeeling />
        </Route>
        <Route exact path="/understanding">
          <UnderstandingRating/>
        </Route>
        <Route exact path="/support">
          <SupportRating />
        </Route>
        <Route exact path ="/comment">
          <Comment/>
        </Route>
        <Route exact path="/review">
          <FeedbackReview/>
        </Route>
        <Route exact path = "/finish">
          <ResetFeedback/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
