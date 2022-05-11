import React from "react";
import { NewUserForm } from "../NewUserForm";

import './WPost.scss';

export const WPost: React.FC = () => {

  return (
    <div className="container">
      <div className="WPost_content">
        <h1>Working with POST request</h1>
        <NewUserForm />
      </div>
    </div>
  )
}