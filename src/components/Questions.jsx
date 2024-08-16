import ReactQuiz from './data/react-quiz.json';

console.log(ReactQuiz)

export default function Questions() {
    return (
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
    )
}
