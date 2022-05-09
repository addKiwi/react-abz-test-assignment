import React from 'react';
import { TopLine } from '../TopLine';
import './Header.scss';

export const Header: React.FC  = () =>  {
  return (
    <header>
        <TopLine></TopLine>
        <div className="header">
          <div className="header__container">
            <h1>
            Test assignment for front-end developer
            </h1>
            <p className='header__text'>
            What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
            </p>
            <button className="button">
              Sign up
            </button>
          </div>
          
        </div>
    </header>
  );
}

