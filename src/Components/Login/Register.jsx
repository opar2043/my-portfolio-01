import React from 'react'
import { Link } from 'react-router-dom'
import supabase from '../../Supabase/Supabase';
import Swal from 'sweetalert2';
const Register = () => {

  async  function handleSubmit(e){
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const pass = e.target.password.value;
        
        const userObj = {
            name,
            email,
            pass
        }
        
    const { data, error } = await supabase.auth.signUp({
        email: email,
        pass: pass,
        options: {
          data: { name: name }
        }
      });

      if (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      } else {

        // Insert additional user info into your 'users' table if needed
        await supabase.from('users').insert([{ name: name, email: email , pass: pass }]);
        Swal.fire({
          icon: 'success',
          title: 'Registration successful!',
          text: 'confirmed',
          timer: 3000,
          showConfirmButton: false
        });
        e.target.reset();
      }

    }

    return (
        <div className="my-12 md:my-20 rounded-lg min-h-screen flex items-center justify-center bg-gradient-to-br from-[#6a11cb] to-[#2575fc] py-4">
            <div className="bg-white/50 backdrop-blur-lg p-6 sm:p-8 md:p-10 rounded-3xl shadow-[0_8px_32px_0_rgba(106,17,203,0.2)] flex flex-col w-full max-w-md border border-[#6a11cb]/20">
                <h2 className="text-center mb-8 text-[#2575fc] font-extrabold text-2xl sm:text-3xl tracking-wide drop-shadow-lg">
                    Create Your Account
                </h2>
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name" className="block mb-2 text-gray-700 font-semibold">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            placeholder="Enter your name"
                            className="w-full p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#6a11cb] bg-gray-50 transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-gray-700 font-semibold">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="Enter your email"
                            className="w-full p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#6a11cb] bg-gray-50 transition-all"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-gray-700 font-semibold">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            required
                            placeholder="Enter your password"
                            className="w-full p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-[#6a11cb] bg-gray-50 transition-all text-gray-700"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-[#6a11cb] to-[#2575fc] text-white py-3 rounded-xl font-bold text-lg shadow-lg hover:scale-105 hover:opacity-95 transition-all"
                    >
                        Register
                    </button>
                </form>
                <div className="mt-6 text-center text-gray-600">
                    Already have an account? <Link to="/login" className="text-[#2575fc] font-semibold hover:underline">Login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register