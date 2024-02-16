import React, { useContext, useState } from 'react'
import { ImSpinner2 } from "react-icons/im";
import { HiPencilSquare } from "react-icons/hi2";
import { MyContext } from '../Context/MyContext';

const EditBtn = ({id}) => {
    const [isLoading,setIsLoading] = useState(false);
    const {toggleEditDrawer,setEditCourse} = useContext(MyContext)

    const handleEditBtn=async()=>{
        setIsLoading(true);
        const res = await fetch("http://localhost:5173/api/courses/"+id);
        const data = await res.json();
        console.log(data);
        setEditCourse(data);
        toggleEditDrawer();
        setIsLoading(false)
    }

  return (
    <button onClick={handleEditBtn} disabled={isLoading} className="border group border-emerald-600 p-2 rounded-full">
          <HiPencilSquare className="text-emerald-600 group-disabled:hidden"/>
          <ImSpinner2 className='hidden group-disabled:block animate-spin text-emerald-600' />
        </button>
  )
}

export default EditBtn
