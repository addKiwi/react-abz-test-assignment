import React from 'react';
import logo from '../../assets/Logo.svg';
import './TopLine.scss';

export const TopLine: React.FC = () => {
  return (
    <div className='topLine'>
      <div className="container">
        <div className="topLine__content">
          <img src={logo} alt="Logo" />
          <div className="navButtons">
            <button className="button">
              Users
            </button>
            <button className="button">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
