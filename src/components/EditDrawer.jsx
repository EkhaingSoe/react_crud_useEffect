import React, { useContext, useEffect, useRef, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import ButtonBtn from "./ButtonBtn";
import { MyContext } from '../Context/MyContext';
import { CgSpinnerTwoAlt } from "react-icons/cg";

const EditDrawer = () => {
  
  const {editDrawer,toggleEditDrawer,editCourse : {id,title,short_name,fee},updateCourse} = useContext(MyContext);
  const [isLoading,setIsLoading] = useState(false);

  const titleRef = useRef()
  const shortRef = useRef()
  const feeRef = useRef()
  const idRef= useRef()
  const closeRef= useRef()

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const newCourse={
      id:idRef.current.value,
      title:titleRef.current.value,
      short_name:shortRef.current.value,
      fee:feeRef.current.value
    }

    setIsLoading(true);

    const res = await fetch("http://localhost:5173/api/courses/"+id, {
      method: "PUT",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newCourse),
    });

    const json = await res.json();
    updateCourse(json)
    setIsLoading(false);
    // console.log(closeRef.current.checked);
    if(closeRef.current.checked){
      toggleEditDrawer()
    }
  }

  
  useEffect(()=>{
    console.log("useEffect");
    titleRef.current.value=title;
    shortRef.current.value = short_name;
    feeRef.current.value = fee;
    idRef.current.value = id;

  },[])



  return (
    <div
      className={`w-80 h-screen fixed top-0 right-0 bg-white shadow-lg ${editDrawer?"":"translate-x-full"}   transition-all duration-500 `}
    >
      <div className="px-4 py-4 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold  text-gray-700 ">Edit Courses</h1>
          <button onClick={toggleEditDrawer} className="bg-emerald-50 text-emerald-600 p-1 rounded-sm">
            <RxCross2 className="text-xs" />
          </button>
        </div>
        <form action="" onSubmit={handleSubmit} className="flex flex-col gap-3">
          <input type='hidden' ref={idRef} />
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Course Title
            </label>
            <input
              ref={titleRef}
              disabled={isLoading}
              type="text"
              name=""
              placeholder="eg:Special Web Design "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Short Title
            </label>
            <input
              ref={shortRef}
              disabled={isLoading}
              type="text"
              name=""
              placeholder="eg:SWD "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
            />
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Course Title
            </label>
            <input
              ref={feeRef}
              disabled={isLoading}
              type="text"
              name=""
              placeholder="eg:30000 "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" ref={closeRef} name="" id="" />
              <label htmlFor="">Closed After Saved</label>
            </div>
            <button
              disabled={isLoading}
              className="bg-emerald-600 group  text-white px-5 py-2 text-[13px] rounded-md"
            >
              {/* When isLoading is true, the button is disabled. */}
              <h2 className="group-disabled:hidden">Create</h2>
               {/* the text "Create" is visible when isLoading is false  */}
               {/* the text "Loading" is visible when isLoading is true */}
              <div className="hidden group-disabled:flex items-center gap-2">
                <CgSpinnerTwoAlt className="animate-spin" />
                Loading
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EditDrawer
