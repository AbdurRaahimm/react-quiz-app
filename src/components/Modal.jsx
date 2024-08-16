import React from 'react'
import Result from './Result'

export default function Modal() {


    return (
        <div id='quiz' popover="true" className='rounded-md md:w-4/12 pb-3 px-3' >
            <div className="flex justify-end">
                <button
                    popovertarget="quiz"
                    className=' text-rose-500 font-bold text-xl p-2'
                > &times; </button>
            </div>

            <div className="flex justify-between">
                <p className='font-bold text-lg'> Quiz Application </p>
                <p className='bg-rose-500 text-white p-1 rounded-md font-semibold select-none '> Time Left  <span className='bg-black text-white font-bold py-[2px] px-2 rounded-md'> 04 </span>  </p>
            </div>
            <p className='text-md text-center text-gray-500'> Please select the correct answer from the options below. </p>
            <hr className='my-2 border-4 border-rose-500 rounded-md' />
            <div className="flex justify-between">
                <p className='font-semibold text-lg'> Question 1 / 10</p>
                <p className=' font-semibold'> 100 / 200 </p>
            </div>

            <div className="flex flex-col space-y-3">
                <p className='text-lg font-semibold capitalize'>1. What is the capital of bangladesh? </p>
                <div className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="option1"
                            after=" &#10003;"
                            className=" has-[:checked]:after:content-[attr(after)] has-[:checked]:bg-green-200 has-[:checked]:text-green-900 has-[:checked]:ring-indigo-200 px-3 py-1 font-bold w-full rounded-md  border border-green-400 text-black flex justify-between cursor-pointer hover:bg-green-100">
                            Dhaka
                            <input type="radio" name='answer' id='option1' className='hidden' />
                        </label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="option2"
                            after=" &#10003;"
                            className=" has-[:checked]:after:content-[attr(after)] has-[:checked]:bg-green-200 has-[:checked]:text-green-900 has-[:checked]:ring-indigo-200 px-3 py-1 font-bold w-full rounded-md  border border-green-400 text-black flex justify-between cursor-pointer hover:bg-green-100">
                            Dhaka
                            <input type="radio" name='answer' id='option2' className='hidden' />
                        </label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="option3"
                            after=" &times;"
                            className=" has-[:checked]:after:content-[attr(after)] has-[:checked]:bg-red-200 has-[:checked]:text-red-900 has-[:checked]:ring-red-200 px-3 py-1 font-bold w-full rounded-md  border border-green-400 has-[:checked]:border-red-500 text-black flex justify-between cursor-pointer hover:bg-green-100 ">
                            Dhaka
                            <input type="radio" name='answer' id='option3' className='hidden' />
                        </label>
                    </div>

                    <div className="flex items-center space-x-3">
                        <label
                            htmlFor="option4"
                            after=" &#10003;"
                            className=" has-[:checked]:after:content-[attr(after)] has-[:checked]:bg-green-200 has-[:checked]:text-green-900 has-[:checked]:ring-indigo-200 px-3 py-1 font-bold w-full rounded-md  border border-green-400 text-black flex justify-between cursor-pointer hover:bg-green-100">
                            Dhaka
                            <input type="radio" name='answer' id='option4' className='hidden' />
                        </label>
                    </div>






                </div>

                <div className="flex justify-end">
                    <button
                        className='bg-rose-500 text-white px-3 py-2 rounded-md font-semibold hover:bg-rose-700'
                    > Next Question </button>
                </div>

                <Result />
            </div>
        </div>
    )
}
