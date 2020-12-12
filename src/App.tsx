import { render } from "@testing-library/react";
import React, { Suspense, lazy, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
import HeaderMail from './components/EmailBox/HeaderMail'
import BootStrapTest from "./components/bootstrap/bootstraptest";


function App() {
  const [count,setCount] = useState(0)
  const handleClick =()=>{
    setCount(count+1)
    setCount(count+1)
  }
  return (

    <div>
    {
      false || <h1> hello</h1>
    }
    </div>
  );
}
export default App;
