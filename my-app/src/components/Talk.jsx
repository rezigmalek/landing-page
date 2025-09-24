import React from 'react'
import MagicButton from './MagicButton'

const Talk = () => {
    return (
        <div className='text-center py-5 my-5'>
            <h1>Got a question? Let’s talk.</h1>
            <h6 className='mt-4 custom-text'>At Althue Academy, we’re here to help you kickstart your creative journey —</h6>
            <h6 className='custom-text'>whether you're curious about a course, need help choosing the right path, or just</h6>
            <h6 className='custom-text mb-4'>want to say hello.</h6>
            <MagicButton>Contact us</MagicButton>
        </div>
    )
}

export default Talk
