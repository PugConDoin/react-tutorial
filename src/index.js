import React from 'react';  // use javascript es6 to import react module
import ReactDom from 'react-dom'; // has the render() method toinject JS as HTML into DOM

function Greeting(){
  return (
  <h4>this is Mark and this is my first component</h4>
  );
}

ReactDom.render(<Greeting />, document.getElementById('root'));