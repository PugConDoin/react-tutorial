import React from 'react';  
import ReactDom from 'react-dom'; 

import './index.css'; 

function Booklist(){
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

// building Components
const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

const Image = () => <img src="https://m.media-amazon.com/images/I/51oZCDb0JNL._AC_UL320_.jpg" alt="road to react book cover"/>
const Title = () => <h1>The Road to React: Your journey to master plain yet pragmatic React.js</h1>;
const Author = () => <h4>Robin Wieruch</h4>

ReactDom.render(<Booklist />, document.getElementById('root'));