import React from 'react';

function People(props){
  console.log(props.everyone);
  return (
    <ul className='people-list'>
      {
        props.everyone.map(people => (
          <li className='people-item'>
            <img src={people.image} />
            <h3>{people.name}</h3>
            <p>{people.description}</p>
            <a href={people.wikiLink}>Know More!</a>
          </li>
        ))
      }
    </ul>
  );
}

export default People;