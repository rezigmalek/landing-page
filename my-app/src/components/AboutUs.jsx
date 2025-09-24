import React from 'react'
import img1 from '../images/img-1.jpg'
import icon1 from '../images/icon1.png'
import icon2 from '../images/icon2.png'
import icon3 from '../images/icon3.png'
import icon4 from '../images/icon4.png'

const AboutUs = () => {
    return (
        <div className='row py-5'>
            <div className='text-center my-5'>
                <h1>What makes Althue different</h1>
                <h6 className='mt-4 custom-text'>We don’t just teach you how to design, we teach you how to</h6>
                <h6 className='custom-text fw-bold'>build a creative career.</h6>
            </div>
            <div className='row d-flex justify-content-center'>
                <div
                    className="card col mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                >
                    <div className="card-body">
                        <img
                            src={icon1}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                        />
                        <h5 className="card-title fw-bold">Career Launch</h5>
                        <p className="card-text mb-0">
                            Turn your creativity into freelance work build a portfolio and land your first clients.
                        </p>
                    </div>
                </div>

                <div
                    className="card col mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                >
                    <div className="card-body">
                        <img
                            src={icon2}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                        />
                        <h5 className="card-title fw-bold">Practical Learning</h5>
                        <p className="card-text mb-0">
                            Project-based courses focused on real-world skills.
                        </p>
                    </div>
                </div>

                <div
                    className="card col mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                >
                    <div className="card-body">
                        <img
                            src={icon3}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                        />
                        <h5 className="card-title fw-bold">Ongoing Mentorship</h5>
                        <p className="card-text mb-0">
                            Get live feedback and guidance from experienced freelance instructors.
                        </p>
                    </div>
                </div>

                <div
                    className="card col mx-4 border-0 shadow-lg d-flex align-items-center justify-content-center rounded-4"
                    style={{ width: "250px", height:"250px" }}
                >
                    <div className="card-body">
                        <img
                            src={icon4}
                            className="rounded-3 mb-3"
                            alt="test"
                            width={60}
                            height={60}
                        />
                        <h5 className="card-title fw-bold">Surrounded by Creatives</h5>
                        <p className="card-text mb-0">
                            Grow with fellow designers, editors, and creators in a supportive space.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            )
}

            export default AboutUs
