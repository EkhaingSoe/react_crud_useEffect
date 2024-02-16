import React from 'react'
import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className='border border-emerald-600 flex items-center px-2 py-2 gap-2 rounded-md shadow-md'>
        <CiSearch className='font-medium text-emerald-600' />
      <input type="search" className='outline-none  ' placeholder='Search...' />
    </div>
  )
}

export default SearchInput
