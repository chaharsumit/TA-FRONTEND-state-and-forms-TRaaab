import React from 'react';
import Header from './Header';
import Tags from './Tags';

function App(){
  return (
    <>
      <Header />
      <div className='container'>
        <Tags />
      </div>
    </>
  );
}

export default App;