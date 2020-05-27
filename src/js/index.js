import React from "react";
import { render } from "react-dom";
import MyComponent from "./myComponent";

var myComponentElement = document.getElementById("my-component");

render(<MyComponent />, myComponentElement);
