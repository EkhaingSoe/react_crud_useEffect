import React from 'react'

const Container = ({children}) => {
  return (
    <div className='max-w-[900px]  mx-auto my-5 font-poppins flex text-sm flex-col gap-8'>
      {children}
    </div>
  )
}

export default Container
