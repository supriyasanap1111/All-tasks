import { Route, Routes, BrowserRouter } from "react-router-dom";
import './App.css';
import Task3 from './Task3/Main';
import Task2A from './Task 2A/Main'
import Task2B from './Task 2B/Main'
import Task4 from './Task4/Main'
import Navbar from "./Navbar";

function App() {
  return (
    <>
    <BrowserRouter className="App">
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Task2A />} />
      <Route path="/task2" element={<Task2B />} />
      <Route path="/task3" element={<Task3 />} />
      <Route path="/task4" element={<Task4 />} />
    </Routes>
  </BrowserRouter>

    <div>
      {/* <Task3/> */}
      {/* <Task2A/> */}
      {/* <Task2B/> */}
      {/* <Task4/> */}




    </div>
    </>
  );
}

export default App;
