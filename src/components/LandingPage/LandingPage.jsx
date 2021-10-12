import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.css';

// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const [heading, setHeading] = useState('Welcome');
  const history = useHistory();

  const onLogin = (event) => {
    history.push('/login');
  };

  return (
    <div className="container">
      <h2>{heading}</h2>

      <div className="grid">
        <div className="grid-col grid-col_8">
          <p>
          Fantasy premier league picks is a game of predicting the English premier league games results before they happen. The players of the game are provided with upcoming week fixtures of the teams playing. While some knowledge of the teams playing against each other based on their strengths plays some part in making some close predictions if not accurate ones, however, someone having little knowledge of the team’s strength is certainly not at a disadvantage at all.  It is not uncommon to see scenarios where people who may have thought that they've made some informed predictions based on the available data, fall on their faces when an upset has been pulled through by a weaker team. As they say in soccer parlance “ Football is round, anything is possible”.

          </p>

        </div>
        <div className="grid-col grid-col_4">
          <RegisterForm />

          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button>
          </center>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
