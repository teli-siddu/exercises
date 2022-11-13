import Calculator from "./calculator";
import "./App.css";
import Header from "./shared/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchFilter from "./SearchFilter/Index";
import LoginForm from './Login/Index'
import MenuTree from "./JsonTree";
import DragDrop from "./DragDrop/Index";
import ReactRedux from './Redux/index';
import store from './Redux/Redux/store'
import Counter from "./Redux/Redux/counter";
import { Provider } from 'react-redux';

import EmployeeManagement from "./Redux/index";

function x() {
  setTimeout(function () {
    // console.log(i);
  }, 1000);
  var i = 1;
}

function App() {
  x();
  return (

    <div className="my-app">
      <Router>
        <div className="header-layout">
          <Header />
        </div>
        <div className="body-content">
        <Provider store={store}>
          <Routes>

            <Route path="/calculator" element={<Calculator />} />
            <Route path="/" element={<Calculator />} />
            <Route path="/search-filter" element={<SearchFilter />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/menu-tree" element={<MenuTree />} />
            <Route path="/drag-drop" element={<DragDrop />} />
          
            <Route path="/react-redux" element={<EmployeeManagement />} />

          </Routes>
          </Provider>
        </div>
      </Router>
    </div >

  );
}

export default App;
