import React from 'react'

const Skill = ({ name, image }) => {
    return (
        <div className='flex flex-row  items-center mt-7 shadow-blue-500 shadow-lg w-5/6'>
            <span className='text-2xl text-blue-500 mr-2'>{name}</span>
            <div className='bg-white w-1/6 rounded-3xl'>
                <img className='w-6/6 rounded-3xl' src={image} alt={name} />
            </div>

        </div>
    )
}

export default Skill