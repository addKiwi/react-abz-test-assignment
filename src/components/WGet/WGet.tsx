import React from "react";
import { Users } from '../Users/Users'

import './WGet.scss';

export const WGet: React.FC = () => {

  return (
    <div className="container">
      <div className="WGet_content">
        <h1>Working with GET request</h1>
        <Users />
      </div>
    </div>
  )
}