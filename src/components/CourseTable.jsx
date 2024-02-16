import React from "react";
import ButtonBtn from "./ButtonBtn";
import SearchInput from "./SearchInput";
import RowGroup from "./RowGroup";

const CourseTable = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <ButtonBtn>Create Course</ButtonBtn>
        <SearchInput />
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                No.
              </th>
              <th scope="col" className="px-6 py-3">
                Course Title
              </th>
              <th scope="col" className="px-6 py-3">
                Short Name
              </th>
              <th scope="col" className="px-6 py-3">
                Course Fee
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody>
           <RowGroup/>
           
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CourseTable;
