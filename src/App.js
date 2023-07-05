import React from 'react';
import Footer from './components/Footer';
import MoveGallery from './components/MoveGallery';
import Navbar from './components/Navbar';
import NewTrailer from './components/New_trailer';
import './styles/App.css'

const App = () => {
  return (
    <div className='App'>
      <div className='home'>
        <Navbar />
        <div className='content'>
          <NewTrailer />
          <MoveGallery />
        </div>
        <Footer />
      </div>
      
    </div>
  )
}
 
export default App;
