// Coding Steps:
// Using an online API of your choice, create a React project. You will be working on this for the next three weeks.
// Project must meet the following criteria:
// Use React Router and have at least 3 pages using React Bootstrap or an alternative styling library
// Contain at least 10 components
// Allow for all CRUD operations
// *******************************************************
// instructions: once cloned you will need to run npm install to install dependencies needed to run this application
// ***************************************************

import Navbar from "./components/navbar";
import Header from "./components/header";
// import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Navbar />
      </>
    </div>
  );
}

export default App;
