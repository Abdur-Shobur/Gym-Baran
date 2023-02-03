import React from 'react'

function Paragraph({ children, classes }) {
  return (
    <p className={`text-dark text-base font-extralight ${classes}`}>
      {children}
    </p>
  )
}

export default Paragraph
