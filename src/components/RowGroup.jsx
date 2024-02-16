import React, { useContext, useEffect, useState } from 'react'
import Row from './Row'
import LoaderRow from './LoaderRow';
import { MyContext } from '../Context/MyContext';
import EmptyRow from './EmptyRow';

const RowGroup = () => {

  const {courses,setCourses} = useContext(MyContext);
 
  const [isLoading,setIsLoading] = useState(true);
  console.log(courses);

  const LoaderRowLength=Array.from({length:5}, (v, i) => i);

  useEffect(()=>{
    const fetchData= async()=>{
      const res= await fetch("http://localhost:5173/api/courses");
      const data= await res.json();
      setCourses(data);
      setIsLoading(false)
    }
    fetchData();
  },[])

  return (
    <>
    {
      isLoading ? LoaderRowLength.map((el,index)=><LoaderRow key={index} />) : courses.length>0?(courses?.map(course=><Row key={course.id} {...course} />)):<EmptyRow/>
    }
    
   
    
    </>
  )
}

export default RowGroup
