import Footer from './components/Footer'
import Modal from './components/Modal'
import ReactLogo from '/react.svg'

export default function App() {
  return (
    <section className="bg-gradient-to-r from-pink-500 to-rose-500 h-screen flex  flex-col justify-center items-center">
      <img src={ReactLogo} alt="React Logo" className=" animate-spin hover:animate-none duration-700 w-32 h-32 cursor-pointer "  />
      {/* <img src={ReactLogo} alt="ReactLogo" className='animate-spin w-24 ' /> */}
      <div className="flex flex-col items-center justify-between space-y-3">
        <h1 className="text-5xl font-bold text-white"> React Quiz App </h1>
        <p className='text-white text-xl'> Welcome to The React Quiz App! </p>
      </div>

      <button popovertarget="quiz" className="bg-white text-rose-500 px-5 py-2 rounded-lg mt-5 font-bold hover:bg-rose-500 hover:text-white"> Get Started </button>

      <Modal />

      <Footer />
    </section>
  )
}
