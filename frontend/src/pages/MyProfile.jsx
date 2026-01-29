import React, { useState } from 'react'
import { assets } from '../assets/assets'

function MyProfile() {

  const [userData, setUserData] = useState({
    name: "Edware vincent",
    image: assets.profile_pic,
    email: 'richardjameswap@gmail.com',
    phone: '+1 123 456 7890',
    address: {
      line1: "57th Cross , Richmond",
      line2: "Circle, Church Road, London"
    },
    gender: 'Male',
    dob: '2000-01-20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white shadow-lg rounded-xl w-full max-w-xl p-6">

        <div className="flex flex-col items-center gap-3">
          <img
            src={userData.image}
            alt="profile"
            className="w-28 h-28 rounded-full object-cover border-4 border-blue-500"
          />

          {
            isEdit
              ? <input
                  className="border rounded-md px-3 py-1 text-center focus:outline-blue-500"
                  value={userData.name}
                  onChange={e => setUserData(p => ({ ...p, name: e.target.value }))}
                />
              : <h2 className="text-xl font-semibold">{userData.name}</h2>
          }
        </div>

        <hr className="my-6" />

        <p className="text-sm font-semibold text-gray-500 mb-2">
          CONTACT INFORMATION
        </p>

        <p className="text-gray-700 mb-2">
          <span className="font-medium">Email:</span> {userData.email}
        </p>

        {
          isEdit
            ? <input
                className="w-full border rounded-md px-3 py-1 mb-2"
                value={userData.phone}
                onChange={e => setUserData(p => ({ ...p, phone: e.target.value }))}
              />
            : <p className="text-gray-700 mb-2">
                <span className="font-medium">Phone:</span> {userData.phone}
              </p>
        }

        <p className="font-medium text-gray-700 mt-3">Address</p>

        {
          isEdit
            ? <div className="space-y-2">
                <input
                  className="w-full border rounded-md px-3 py-1"
                  value={userData.address.line1}
                  onChange={e =>
                    setUserData(p => ({
                      ...p,
                      address: { ...p.address, line1: e.target.value }
                    }))
                  }
                />
                <input
                  className="w-full border rounded-md px-3 py-1"
                  value={userData.address.line2}
                  onChange={e =>
                    setUserData(p => ({
                      ...p,
                      address: { ...p.address, line2: e.target.value }
                    }))
                  }
                />
              </div>
            : <p className="text-gray-700">
                {userData.address.line1}<br />
                {userData.address.line2}
              </p>
        }

        <hr className="my-6" />

        <p className="text-sm font-semibold text-gray-500 mb-2">
          BASIC INFORMATION
        </p>

        {
          isEdit
            ? <select
                className="w-full border rounded-md px-3 py-1 mb-2"
                value={userData.gender}
                onChange={e => setUserData(p => ({ ...p, gender: e.target.value }))}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            : <p className="text-gray-700 mb-2">
                <span className="font-medium">Gender:</span> {userData.gender}
              </p>
        }

        {
          isEdit
            ? <input
                type="date"
                className="w-full border rounded-md px-3 py-1"
                value={userData.dob}
                onChange={e => setUserData(p => ({ ...p, dob: e.target.value }))}
              />
            : <p className="text-gray-700">
                <span className="font-medium">DOB:</span> {userData.dob}
              </p>
        }

        <button
          onClick={() => setIsEdit(!isEdit)}
          className="mt-6 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          {isEdit ? 'Save Profile' : 'Edit Profile'}
        </button>

      </div>
    </div>
  )
}

export default MyProfile
