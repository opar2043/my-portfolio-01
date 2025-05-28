import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <dialog id="my_modal_3" className="modal">
        <div className="modal-box h-[80%]  bg-gradient-to-b from-violet-600 to-black rounded-2xl text-white shadow-2xl border border-violet-900">
         
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-white hover:bg-violet-800">
              ✕
            </button>
          </form>

          {/* Modal Content */}
          <div className="w-full h-full max-w-2xl mx-auto p-2 flex flex-col justify-between gap-4">
            <h2 className=" font-semibold">
              Hello😊 , I'm Opar's Assistant. Fell Free to Ask Me!
            </h2>
            {/* Answer Display Section */}
            <div className="flex-1 overflow-y-auto border border-violet-700 rounded-xl p-2 bg-black bg-opacity-30 text-violet-100 shadow-inner">
              {/* AI response will go here */}
              <p className="text-sm">
                Hi there! I'm Rijoan, a frontend developer passionate about
                React and modern web development. Ask me more!
              </p>
              <pre className="text-xs mt-4 text-justify ">{ans}</pre>
            </div>

            {/* Message Input Bar */}
            <form onSubmit={handleChatBot} className="w-full flex items-center gap-2 bg-black bg-opacity-60 border border-violet-700 rounded-full p-1 md:p-2 shadow-inner">
              <input
                type="text"
                onChange={(e) => setQus(e.target.value)}
                placeholder="Ask me anything about myself..."
                className="flex-1 px-4 py-2 bg-transparent text-white placeholder-violet-300 focus:outline-none focus:ring-0 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-yellow-500 to-yellow-700 text-white rounded-full p-1 md:p-3 hover:scale-105 transition-transform shadow-lg"
              >
                <FaLocationArrow />
              </button>
            </form>
          </div>
        </div>
      </dialog> 
    </>
  )
}

export default App
