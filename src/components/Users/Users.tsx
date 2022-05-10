import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/api";
import { Person } from "../../types/Person";
import { Card } from "../Card/Card";
import './Users.scss';

const list = [
  {
    "id": 1873,
    "name": "vladimir",
    "email": "vladimir@gmail.com",
    "phone": "+380001234567",
    "position": "Security",
    "position_id": 3,
    "registration_timestamp": 1652168530,
    "photo": "https://frontend-test-assignment-api.abz.agency/images/users/627a1752aeb2a1873.jpg"
},
{
    "id": 1872,
    "name": "Lyubov Mehailivna",
    "email": "lyuba@gmail.com",
    "phone": "+380696357428",
    "position": "Security",
    "position_id": 3,
    "registration_timestamp": 1652131582,
    "photo": "https://frontend-test-assignment-api.abz.agency/images/users/627986fe837691872.jpeg"
},
{
    "id": 1,
    "name": "Leanne West",
    "email": "onie34@lubowitz.com",
    "phone": "+380936050764",
    "position": "Content manager",
    "position_id": 2,
    "registration_timestamp": 1604494937,
    "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596d3bb1.jpeg"
},
{
    "id": 2,
    "name": "Ahmad Rodriguez",
    "email": "isadore08@zulauf.biz",
    "phone": "+380993215621",
    "position": "Security",
    "position_id": 3,
    "registration_timestamp": 1604494937,
    "photo": "https://frontend-test-assignment-api.abz.agency/images/users/5fa2a6596f0072.jpeg"
},
]

export const Users: React.FC = () => {

  const [users, setUsers] = useState<Person[]>([]);

  useEffect(() => {
    getUsers()
      .then(data => setUsers(data.users));
  }, []);
  return (
    <>
      <div className="cards">
        {
          users.map(user => (
            <Card key={user.id} user={user} />
          ))
        }
      </div>
      <button className="button">
      Show more
      </button>
    </>
  )
}
