import React from 'react';
import MoveGallery from './components/MoveGallery';
import Navbar from './components/Navbar';
import NewTrailer from './components/New_trailer';

const App = () => {
  return (
    <div className='App'>
      <div className='home'>
        <Navbar />
        <div className='content'>
          <NewTrailer />
          <MoveGallery />
        </div>
      </div>
      
    </div>
  )
}
 
export default App;
