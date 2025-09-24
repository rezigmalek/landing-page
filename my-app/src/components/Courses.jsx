import React from 'react'
import img1 from '../images/img-1.jpg'
import MagicButton from './MagicButton'
import { PiDeviceMobile } from "react-icons/pi";
import { BsArrowRightCircleFill } from "react-icons/bs";



const Courses = () => {
    return (
        <div className='my-5 pb-5'>
            <div className='row py-5'>
                <div className='text-center mt-5'>
                    <h1>Explore Our Best Courses</h1>
                    <h6 className='mt-4 custom-text'>Discover a world of knowledge and opportunities with our online education.</h6>
                    <h6 className='custom-text'>platform pursue a new career.</h6>
                </div>
            </div>
            <div className='row d-flex justify-content-center gap-5'>
                <div className="card border-0 shadow-lg" style={{ width: "18rem" }}>
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-lg" style={{ width: "18rem" }}>
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="card border-0 shadow-lg" style={{ width: "18rem" }}>
                    {/* Conteneur image + badge */}
                    <div className="position-relative">
                        <img src={img1} className="card-img-top pt-2 rounded-4" />

                        {/* Badge prix en bas de l'image */}
                        <span
                            className="badge position-absolute bottom-0 end-0 me-2 mb-2 px-3 py-2 rounded-2"
                            style={{ backgroundColor: "rgb(121, 61, 244)", fontSize: "0.9rem" }}
                        >
                            18000.00DZD
                        </span>
                    </div>

                    <div className="card-body">
                        <div className="row pb-2">
                            <div className="col d-flex align-items-center gap-2">
                                <PiDeviceMobile />
                                <h6 className="custom-text pt-1">6 Lessons</h6>
                            </div>
                        </div>

                        <h5 className="card-title pb-5">UI/UX for beginners</h5>

                        <div className="d-flex justify-content-end">
                            <button className="course-btn">
                                <div className="d-flex align-items-center gap-2">
                                    Course
                                    <BsArrowRightCircleFill size={15} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mt-5 d-flex text-center justify-content-center'>
                <h6 className='custom-text'>See mor courses  <BsArrowRightCircleFill size={15} /></h6>
            </div>
        </div>
    )
}

export default Courses
