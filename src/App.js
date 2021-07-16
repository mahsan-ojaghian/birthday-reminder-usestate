import React, { useState } from 'react';
//fetching data from data.js
import data from './data'
//List is a child component so import it here.
import List from './List'

function App() {
//using from useState Hook and set data to initial state
  const [people, setPeople] = useState(data)
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        {/*set our data as prop value */}
        <List people={people} />
        {/*a button that set people an empty array */}
        <button onClick={() => setPeople([])}>clear all</button>
      </section>
    </main>
  )
}

export default App;
