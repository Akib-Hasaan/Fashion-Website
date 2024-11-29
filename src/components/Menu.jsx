import React from 'react'

const Menu = ({className, text}) => {
  return (
    <ul>
        <li className={`${className}`} >{text}</li>
    </ul>
  )
}

export default Menu