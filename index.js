import React from 'react';
import ReactDOM from 'react-dom';
import  {add,sub,mul,div} from "./calc";
import "./index.css";


ReactDOM.render(
  <>
  <div  >

  <ul  className="calc">
  <li>Sum of digit = {add(2,3)}</li>
  <li>Sub of digit = {sub(2,3)}</li>
  <li>Mul of digit =  {mul(2,3)}</li>
  <li>Div of digit = {div(6,3)}</li>
</ul>
  </div>
  </>,
  document.getElementById("root")
);
