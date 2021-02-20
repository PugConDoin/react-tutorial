import React from 'react';  // use javascript es6 to import react module
import ReactDom from 'react-dom'; // has the render() method toinject JS as HTML into DOM

function Greeting(){
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
}

// building Components
const Person = () => <h2>Mark Freeman</h2>
const Message = () => {
  return <p>This is my message</p>
}

ReactDom.render(<Greeting />, document.getElementById('root'));