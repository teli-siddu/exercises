import Calculator from "./calculator";
import "./App.css";
import Header from "./shared/Header";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import SearchFilter from "./SearchFilter/Index";
import LoginForm from './Login/Index'

function App() {
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
      </Routes>
      </Router>
    </div>
  
  );
}

export default App;
