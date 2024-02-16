import React, { useContext } from 'react'
import { MyContext } from '../Context/MyContext';

const ButtonBtn = ({children}) => {

  const {toggleCreateDrawer} = useContext(MyContext);
  return (
    <button onClick={toggleCreateDrawer} className='bg-emerald-600 text-white px-5 py-2 text-[13px] rounded-md'>
        {children}
    </button>
  )
}

export default ButtonBtn
