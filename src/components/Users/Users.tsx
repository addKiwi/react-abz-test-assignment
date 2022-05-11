import React, { useEffect, useState } from "react";
import { getUsers } from "../../api/api";
import { Person } from "../../types/Person";
import { Card } from "../Card/Card";
import './Users.scss';

export const Users: React.FC = () => {
  const [next, setNext] = useState('');
  const [users, setUsers] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const  loadMore = async() => {
    setIsLoading(true);
    await getUsers(next)
      .then(data => {
        setUsers(prev => [...prev, ...data.users]);

        return data;
      })
      .then(next => setNext(next.links.next_url));
    setIsLoading(false);
  }

  useEffect(() => {
    getUsers()
      .then(data => {
        setUsers(data.users)
      
        return data;
      })
      .then(data => setNext(data.links.next_url))
      .then(data => setIsLoading(false));
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
      {
        isLoading &&
        (
          <div className="loader"></div>
        )
      }
      { next !== null &&
        (
          <button 
          className="button"
          onClick={loadMore}  
          >
          Show more
          </button>
        )
      }
    </>
  )
}
