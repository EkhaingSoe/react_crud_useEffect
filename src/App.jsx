import React, { useContext, useState } from "react";
import Container from "./components/Container";
import Header from "./components/Header";
import CourseTable from "./components/CourseTable";
import CreateDrawer from "./components/CreateDrawer";
import EditDrawer from "./components/EditDrawer";
import { MyContext } from "./Context/MyContext";

const App = () => {

  const {editDrawer} = useContext(MyContext);


  return (
    <Container>
      <Header>React CRUD</Header>
      <CourseTable />
      <CreateDrawer />
      {editDrawer && <EditDrawer/>}
      
    </Container>
  );
};

export default App;
