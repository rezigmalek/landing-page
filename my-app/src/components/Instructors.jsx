import React from 'react'
import img from '../images/img-1.jpg'

const Instructors = () => {
    return (
        <div className='my-5 pb-5'>
            <div className='text-center my-5'>
                <h1>Expert Instructors</h1>
                <h6 className='mt-4 custom-text'>Learn from experienced freelancers who’ve worked with a wide range of local</h6>
                <h6 className='custom-text'>and international clients across various industries.</h6>
            </div>

            <div className='row ms-5 d-flex justify-content-center'>
                <div className='col d-flex justify-content-center align-items-center flex-column'>
                    <img
                        src={img}
                        className="rounded-circle"
                        alt="test"
                        width={210}
                        height={210}
                    />
                    <h5 className='mt-3'>Mohamed Lahmech</h5>
                    <h6 className='custom-text'>teacher</h6>
                </div>

                <div className='col d-flex justify-content-center align-items-center flex-column'>
                    <img
                        src={img}
                        className="rounded-circle"
                        alt="test"
                        width={210}
                        height={210}
                    />
                    <h5 className='mt-3'>Mohamed Lahmech</h5>
                    <h6 className='custom-text'>teacher</h6>
                </div>

                <div className='col d-flex justify-content-center align-items-center flex-column me-5'>
                    <img
                        src={img}
                        className="rounded-circle"
                        alt="test"
                        width={210}
                        height={210}
                    />
                    <h5 className='mt-3'>Mohamed Lahmech</h5>
                    <h6 className='custom-text'>teacher</h6>
                </div>
            </div>
        </div>
    )
}

export default Instructors
