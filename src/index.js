import React from 'react';  
import ReactDom from 'react-dom'; 

// CSS
import './index.css'; 

function Booklist(){
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

// building Components
const Book = () => {
  return (
      <article className='book'>
        <img
          src="https://m.media-amazon.com/images/I/51oZCDb0JNL._AC_UL320_.jpg"
          alt="road to react book cover"
        />
      <h1>The Road to React: Your journey to master plain yet pragmatic React.js</h1>
      <h4>Robin Wieruch</h4>
    </article>
  );
}

ReactDom.render(<Booklist />, document.getElementById('root'));