import React, { createContext, useState } from 'react';

// Create a context object
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {

    const [createDrawer,setCreateDrawer] = useState(false);
    const [editDrawer,setEditDrawer] = useState(false);
    const [courses,setCourses] = useState([]);
    const [editCourse,setEditCourse] = useState({});

    const addCourse=(newCourse)=>{
      setCourses([...courses,newCourse]);
    }

    const deleteCourse=(id)=>{
      setCourses(courses.filter((course)=>course.id!==id))
    }

    const updateCourse = (newCourse) => {
      setCourses(courses.map((course) => {
          if (course.id === newCourse.id) {
              return newCourse;
          }
          return course;
      }));
  };
  

    const toggleCreateDrawer=()=>{
      setCreateDrawer(!createDrawer)
    }

    const toggleEditDrawer=()=>{
      setEditDrawer(!editDrawer)
    }

  

  return (
    <MyContext.Provider value={{createDrawer,toggleCreateDrawer,editDrawer,setEditDrawer,toggleEditDrawer,courses,setCourses,addCourse,deleteCourse,editCourse,setEditCourse,updateCourse}}>
      {children}
    </MyContext.Provider>
  );
};