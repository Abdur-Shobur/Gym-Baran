import React from 'react'

function Nav() {
  return (
    <div className="container mx-auto max-w-screen-xl py-12 px-5">
      <div className="flex justify-between">
        <div>
          <h1 className="text-primary font-SportingGrotesqueRegular text-xl ">
            <span className="bg-primary text-white px-2 rounded-xl mr-2">
              Gym
            </span>
            baran
          </h1>
        </div>
        <div>
          <ul className="md:flex gap-10 items-center hidden">
            <li>Home</li>
            <li>Program</li>
            <li>Blog</li>
            <li>About us</li>
            <li className="bg-secondary py-2 px-5 rounded-md text-white">
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Nav
