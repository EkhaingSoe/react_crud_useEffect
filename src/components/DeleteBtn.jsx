import React, { useContext, useState } from 'react'
import { MdDelete } from "react-icons/md";
import { ImSpinner2 } from "react-icons/im";
import { MyContext } from '../Context/MyContext';

const DeleteBtn = ({id}) => {
    const {deleteCourse} = useContext(MyContext);
    const [isLoading,setIsLoading] = useState(false);
    const handleDeleteBtn=async()=>{
        setIsLoading(true);
        console.log("delete");
        const res = await fetch("http://localhost:5173/api/courses/"+id, {
            method: "DELETE"
          });
          console.log(res);
          if(res.status===204){
            deleteCourse(id)
          }
    }
  return (
    <button onClick={handleDeleteBtn} disabled={isLoading} className="border group border-red-600 p-2  rounded-full">

    <MdDelete className="text-red-600 group-disabled:hidden" />
    <ImSpinner2 className='hidden group-disabled:block animate-spin text-red-600' />
  </button>
  )
}

export default DeleteBtn
