import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/contact";
import TranzoForm from './components/TranzoForm';
import TranzoNavbar from './components/TranzoNavbar';
import About from "./components/about";
import NotFound from "./components/notFound";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import Transactions from "./components/Transactions";

const App = () => {

  return (
    <div className="App" id="app">
      <BrowserRouter>
        <TranzoNavbar />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<TranzoForm />}></Route>
            <Route exact path="/about" element={<About />}></Route>
            <Route exact path="/contact" element={<Contact />}></Route>
            <Route exact path="/transactions" element={<Transactions />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>

        </div>
      </BrowserRouter>

      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >




    </div>


  )
}

export default App
