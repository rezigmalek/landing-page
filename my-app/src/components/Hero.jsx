import React from 'react'
import img1 from '../images/img-1.jpg'
import img2 from '../images/img-2.jpg'
import img3 from '../images/img-3.jpg'
import img4 from '../images/img-4.jpg'
import MagicButton from './MagicButton'
import { BsArrowRightCircleFill } from "react-icons/bs";
import { VscDebugStart } from "react-icons/vsc";
import background from '../images/background.jpeg'
import start from '../images/start.png'


const Hero = () => {
    return (
        <div className="row my-5 hero-row">
            {/* Texte à gauche */}
            <div className="col d-flex flex-column justify-content-center me-4">
                <h1 className="fw-bold display-3 align-items-center">By Creatives</h1>
                <h1 className="fw-bold display-3 align-items-center">For Creatives</h1>
                <h5 className="mt-4 custom-text">
                    Discover a world of creativity and career opportunities with our online learning platform and start building your future.
                </h5>
                <div className='my-4'>
                    <MagicButton>
                        <span className="d-flex align-items-center gap-3">
                            Explore Course <BsArrowRightCircleFill size={15} />
                        </span>
                    </MagicButton>
                </div>
            </div>

            {/* Images à droite */}
            <div className="col d-flex justify-content-center align-items-center flex-column ms-4" style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }}>
                {/* Ligne 1 */}
                <div className="d-flex gap-4 mb-4">
                    <img
                        src={img1}
                        className="rounded-start-pill"
                        alt="test"
                        width={220}
                        height={220}
                    />
                    <img
                        src={img2}
                        className="rounded-circle"
                        alt="test"
                        width={220}
                        height={220}
                    />
                </div>

                {/* Ligne 2 */}
                <div className="d-flex gap-4">
                    <img
                        src={img3}
                        className="rounded-3"
                        alt="test"
                        width={220}
                        height={220}
                    />
                    <img
                        src={img4}
                        className="rounded-end-circle"
                        alt="test"
                        width={220}
                        height={220}
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero
