import '../styles/trailer.css'
import data from './images';
import React from 'react';
import { FaCaretRight,
         FaPlayCircle,
        FaPlusCircle } from 'react-icons/fa'

const NewTrailer = () => {
    return (
        <div className="trailers">
            <div className="title">
                <p id='title'>Top DC Characters</p>
                <div className='sort'>
                    <p id='sort'>Sort By</p>
                    <p id='today'>Today</p>
                    <FaCaretRight className='caret-right'/>
                </div>
            </div>
            <div className="characters">
                <div className='arrow'>
                    <img src={data.green} alt="green" className='green'/>
                    <div className='text-arrow'>
                        <FaPlayCircle className='play'/>
                        <p>Green Arrow</p>
                        <FaCaretRight className='caret-right'/>
                    </div>
                </div>
                <div className='flash'>
                    <img src={data.flash} alt="green" className='flash'/>
                    <div className='text-flash'>
                        <FaPlayCircle className='play'/>
                        <p>Green Arrow</p>
                        <FaCaretRight className='caret-right'/>
                    </div>
                </div>
                <div className='btn-container'>
                    <div className="btns py-4">
                        <button className='success btn btn-warning rounded-pill py-1 mx-2'>Action</button>
                        <button className='drama btn btn-danger rounded-pill py-1 mx-2'>Drama</button>
                        <button className='advent btn btn-warning rounded-pill py-1 mx-2'>Adventure</button>
                    </div>
                    <div className="btns py-4">
                        <button className='dance'>Dance</button>
                        <button className='cartoon'>Cartoon</button>
                    </div>
                    <div className='genre'>
                        <FaPlusCircle className='plus'/>
                        <p>Add your favorite genre</p> 
                    </div>
                    <div className='btn-dark'>
                        <button>Crime</button>
                        <button>Comedy</button>
                        <button>Triller</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default NewTrailer;