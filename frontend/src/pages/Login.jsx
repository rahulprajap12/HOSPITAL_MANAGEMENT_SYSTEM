import React, { useState } from 'react'


function Login() {

  const [state,setState]=useState('Sign up')

  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const[name,setName]=useState('')

  const onSubmitHandler=async(e)=>{
    e.preventDefault()
  }

  return (
    <form className='min-h-[80vh] flex flex-col justify-center items-center' onSubmit={onSubmitHandler}>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg'>
        <p className='text-3xl font-bold text-gray-800 text-center mb-6'>{state==='Sign up' ? "Create Account":"Login"}</p>
        <p className='text-gray-600 text-center mb-8'>Please {state==='Sign up' ? "sign up":"Log in"} to book an appointment</p>

        {state==='Sign up' &&
          <div className='w-full'>
            <p className='block text-gray-700 text-sm font-bold mb-2'>Full Name</p>
            <input className='shadow appearance-none border border-gray-500 rounded w-full  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-colors duration-200' type="text" name="name" onChange={(e)=>setName(e.target.value)} value={name} placeholder="Enter your full name" />
          </div>
        }

        <div className='w-full'>
          <p className='block text-gray-700 text-sm font-bold mb-2'>Email</p>
          <input className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-colors duration-200' type="email" onChange={(e)=>setEmail(e.target.value)} value={email} placeholder="Enter your email" />
        </div>
        <div className='w-full'>
          <p className='block text-gray-700 text-sm font-bold mb-2'>Password</p>
          <input className='shadow appearance-none border border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline hover:border-blue-500 transition-colors duration-200' type="password" onChange={(e)=>setPassword(e.target.value)} value={password} placeholder="Enter your password" />
        </div>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full' type="submit">{state==='Sign up' ? "Create Account":"Login"}</button>
        <p className='text-center text-gray-600 text-sm mt-4'>{state==='Sign up' ? "Already have an account?" : "Don't have an account?"} <span className='text-blue-500 cursor-pointer' onClick={()=>setState(state==='Sign up' ? "Login" : "Sign up")}>{state==='Sign up' ? "Login here":"Sign up here"}</span></p>
      </div>
    </form>
  )
}

export default Login
