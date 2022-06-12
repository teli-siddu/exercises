import Calculator from "./calculator";
import "./App.css";
import Header from "./shared/Header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SearchFilter from "./SearchFilter/Index";
import LoginForm from './Login/Index'
import MenuTree from "./JsonTree";
import DragDrop from "./DragDrop/Index";

function x(){
  setTimeout(function(){
    // console.log(i);
  },1000);
  var i=1;
}

function App() {
  x();
  return (
  
    <div className="my-app">
    <Router>
      <div className="layout">
        <Header />
      </div>
      <Routes>
     
      <Route path="/calculator" element={<Calculator />} />
      <Route path="/" element={<Calculator />} />
      <Route path="/search-filter" element={<SearchFilter />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/menu-tree" element={<MenuTree />} />
      <Route path="/drag-drop" element={<DragDrop />} />
      </Routes>
      </Router>
    </div>
  
  );
}

export default App;
