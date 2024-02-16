import React, { useContext, useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import ButtonBtn from "./ButtonBtn";
import { MyContext } from "../Context/MyContext";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const CreateDrawer = () => {
  const { createDrawer, toggleCreateDrawer,addCourse } = useContext(MyContext);
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const newCourse = {
      title: formData.get("title"),
      short_name: formData.get("short_name"),
      fee: formData.get("fee"),
    };
    console.log(formData.get("close"));
   

    setIsLoading(true);

    const res = await fetch("http://localhost:5173/api/courses", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify(newCourse),
    });

    const json = await res.json();
    console.log(json);
    addCourse(json);
    setIsLoading(false);
    formRef.current.reset();
    if(formData.get("close")==="on"){
      toggleCreateDrawer();
    }

  };

  return (
    <div
      className={`w-80 h-screen fixed top-0 right-0 bg-white shadow-lg ${
        !createDrawer ? "translate-x-full" : ""
      }   transition-all duration-500 `}
    >
      <div className="px-4 py-4 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <h1 className="font-bold  text-gray-700 ">Create New Course</h1>
          <button
            onClick={toggleCreateDrawer}
            className="bg-emerald-50 text-emerald-600 p-1 rounded-sm"
          >
            <RxCross2 className="text-xs" />
          </button>
        </div>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Course Title
            </label>
            <input
              disabled={isLoading}
              type="text"
              name="title"
              placeholder="eg:Special Web Design "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Short Title
            </label>
            <input
              disabled={isLoading}
              type="text"
              name="short_name"
              placeholder="eg:SWD "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
              required
            />
          </div>
          <div className="flex flex-col gap-2 mb-5">
            <label htmlFor="" className="text-[13px] font-medium  ">
              Fee
            </label>
            <input
              disabled={isLoading}
              type="text"
              name="fee"
              placeholder="eg:30000 "
              className="border  outline-none px-3 py-2 rounded-md text-xs tracking-wider shadow-md "
              id=""
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <input type="checkbox" name="close" id="" />
              <label htmlFor="">Close After Saved</label>
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
  );
};

export default CreateDrawer;
