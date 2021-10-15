import React from 'react';
import LandingPage from '../LandingPage/LandingPage';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        <h2>Admin Log in</h2>
        <LandingPage/>
      </div>
    </div>
  );
}

export default AboutPage;
