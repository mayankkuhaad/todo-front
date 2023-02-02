import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Componentes/loginRegistratio/Login";
import Signup from "./Componentes/loginRegistratio/Signup";
import Booklist from "./Componentes/Booklist/Booklist";
import Addbook from "./Componentes/Booklist/Addbook";
import BooksRecord from "./Componentes/Booklist/BooksRecord";
import EditBooks from "./Componentes/Booklist/EditBooks";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/Signup" element={<Signup/>} />
          <Route path="/Booklist" element={<Booklist/>} />
          <Route path="/AddBook" element={<Addbook/>} />
          <Route path="/BookRecord" element={<BooksRecord/>} />
          <Route path="/EditBooks" element={<EditBooks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
