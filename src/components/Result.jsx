import React from 'react'

export default function Result() {
    return (
        <div id='feedback' popover="true" className='w-5/12 '>
            <div className="flex flex-col items-center justify-center h-full">
                <p className='text-rose-500 text-4xl font-bold'> Congratulations! </p>
                <p className='text-rose-500 text-2xl font-semibold'> You have successfully completed the quiz. </p>
                <p className='text-rose-500 text-xl font-semibold'> You have scored 100 out of 200. </p>
                <button className='bg-rose-500 text-white font-bold px-3 py-1 rounded-md'> Try Again </button>

            </div>
        </div>
    )
}
