import React from "react";
import { Person } from "../../types/Person";
import './Card.scss';
import Tooltip from '@mui/material/Tooltip';

interface Props {
  user: Person, 
};

export const Card: React.FC<Props> = ({user}) => {

  return (
    <div className="card">
      <img src={user.photo} alt={user.name} className="card__img" />
      <span className="card__name">
        {user.name}
      </span>
      <span className="card__position">
        {user.position}
      </span>
      <Tooltip title={user.email}>
        <a href={`mailto:${user.email}`} className="card__email">
          {user.email}
        </a>
      </Tooltip>
      <Tooltip title={user.phone}>
        <a href={`tel:${user.phone}`} className="card__phone">
          {user.phone}
        </a>
      </Tooltip>
    </div>
  )
}