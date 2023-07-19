import '../styles/footer.css'

const Footer = () => {
    return ( 
        <div className="footer">
            <div className="footer-content">
                <div className="about">
                    <h1>About</h1>
                    <p>
                        Watch block buster movies <br /> and download all your <br />
                        favorite movie from here <br /> at free download with <br /> 
                        our fast services 
                    </p>
                </div>
                <div className="contact">
                    <h1>Contact</h1>
                    <ul className="list">
                        <a href="">
                            <li>Movies</li>
                        </a>
                        <a href="">
                            <li>Block Busters</li>
                        </a>
                        <a href="">
                            <li>Contact</li>
                        </a>
                        <a href="">
                            <li>About</li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;