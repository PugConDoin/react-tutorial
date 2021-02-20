import React from 'react';  
import ReactDom from 'react-dom'; 

// CSS
import './index.css'; 
// create an array of books
const books = [
  {
    img: 'https://m.media-amazon.com/images/I/51oZCDb0JNL._AC_UL320_.jpg',
    alt: 'road to react book cover image',
    title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
    author: 'Robin Wieruch'
  },
  {
    img: 'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
    alt: 'learning react book cover image',
    title: 'Learning React: Modern Patterns for Developing React Apps',
    author: 'Eve Porcello, Alex Banks'
  },
  {
    img: 'https://m.media-amazon.com/images/I/71Yd2ACrDcL._AC_UY218_.jpg',
    alt: 'fullstack react book cover image',
    title: 'Fullstack React: The Complete Guide to ReactJS and Friends',
    author: 'Anthony Accomazzo, Nate Murray, Ari Lerner'
  },
];

// use map to create a new array of the books object props
// create a new variable 'book', to access the props
function Booklist(){
  return (
    <section className='booklist'>
      {books.map((book)=>{
        return (
          <Book book={book}></Book>
        );
      })}
    </section>
  );
}


const Book = (props) => { 
  const { img, alt, title, author } = props.book;
  return (
      <article className='book'>
        <img
          src={img}
          alt={alt}
        />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));