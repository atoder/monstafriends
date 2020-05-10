import React from 'react';
import Card from './Card';

const CardList = ({ friends }) => {
  return (
    <div>
      {friends.map((user, i) => {
        return (
          <Card
            key={i}
            id={friends[i].id}
            name={friends[i].name}
            email={friends[i].email}
            username={friends[i].username}
          />
        );
      })}
    </div>
  );
};
export default CardList;
