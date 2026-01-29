import React from 'react'
import {assets} from '../assets/assets'
function Footer() {
  return (
    <div className='md:mx-10'>
    <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
      {/* section 1 */}
      <div className='flex flex-col gap-1 mb-5 ' >
        <img className='mb-5 w-44 cursor-pointer gap-5' src={assets.logo} alt="" />

        <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>industry. Lorem Ipsum has been the industry's standard dummy</p>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>text ever since the 1500s, when an unknown printer took a galley of</p>
        <p className='w-full md:w-2/3 text-gray-600 leading-6'>type and scrambled it to make a type specimen book.</p>

      </div>



        {/* section 2 */}
        <div>
            <h2 className='mb-5 text-xl font-medium '>COMPANY</h2>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>

        </div>



        {/* section 3 */}
        <div>
            <h2 className='mb-5 text-xl font-medium '>GET IN TOUCH</h2>
            <ul className='flex flex-col gap-2 text-gray-600'>
                <li>+0-000-000-000</li>
                <li>greatstackdev@gmail.com</li>
            </ul>
        </div>
        </div>
        {/* copyright text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2026 @ Rahul-Prajapati - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer
