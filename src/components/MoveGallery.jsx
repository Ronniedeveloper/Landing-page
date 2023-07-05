import '../styles/gallery.css'
import images from './images'
import {FaThumbsUp, FaShare, FaDownload, FaPlayCircle } from 'react-icons/fa'

const MovieGallery = () => {
    return (
        <div className="movie-gallery">
            <div className="background">
                <h2 id='text'>JUSTICE <br /> AMONG <br /> US</h2>
                <img src={images.adams} alt="" id='black-adams'/>
                <FaPlayCircle  className='background-play'/>
            </div>
            <div className="image-container">
                <div className="image">
                    <img src={images.flash} alt="" />
                    <h1>THE FLASH</h1>
                    <div className='icons'>
                        <FaThumbsUp id='thumbsup'/>
                        <FaShare id='share' />
                    </div>
                    <button><FaDownload id='download'/>Download</button>
                </div>
                <div className="image">
                    <img src={images.green} alt="" />
                    <h1>GREEN ARROW</h1>
                    <div className='icons'>
                        <FaThumbsUp id='thumbsup'/>
                        <FaShare id='share' />
                    </div>
                    <button><FaDownload id='download'/>Download</button>
                </div>
                <div className="image">
                    <img src={images.joker} alt="" />
                    <h1>THE JOKER</h1>
                    <div className='icons'>
                        <FaThumbsUp id='thumbsup'/>
                        <FaShare id='share' />
                    </div>
                    <button><FaDownload id='download'/>Download</button>
                </div>
                <div className="image">
                    <img src={images.drStrange} alt="" />
                    <h1>DR STRANGE</h1>
                    <div className='icons'>
                        <FaThumbsUp id='thumbsup'/>
                        <FaShare id='share' />
                    </div>
                    <button><FaDownload id='download'/>Download</button>
                </div>
            </div>
        </div>
    );
}
 
export default MovieGallery;