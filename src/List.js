import React from 'react';
//pass data as prop to our component(destructuring)
const List = ({ people }) => {
  return (
    <>
{/*List rendering with map method */}
      {people.map((person) => {
        //destructuring our data to smaller parts.
        const { id, name, age, image } = person;
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;