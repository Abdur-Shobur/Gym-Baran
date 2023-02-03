import React from 'react'

function Heading({ children, classes }) {
  return (
    <h1
      className={`font-SportingGrotesqueRegular text-5xl text-dark leading-snug ${classes}`}
    >
      {children}
    </h1>
  )
}

export default Heading
