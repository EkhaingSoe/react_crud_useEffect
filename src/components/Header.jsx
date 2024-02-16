import React from 'react'

const Header = ({children}) => {
  return (
    <div>
      <h1 className='font-semibold text-xl text-emerald-600'>{children}</h1>
    </div>
  )
}

export default Header
