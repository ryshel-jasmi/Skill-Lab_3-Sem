import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Myblogs from "./components/myblogs";
import About from "./components/about";
import Update from "./components/update";

function App() {
  return (
    <>
      <center>
        <h2>Technical BLog</h2>
      </center>
      <hr></hr>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Myblogs />} />
          <Route path="/about" element={<About />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
