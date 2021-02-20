import React from 'react';  
import ReactDom from 'react-dom'; 

// CSS
import './index.css'; 
// setup vars
const book1 = {
  img: 'https://m.media-amazon.com/images/I/51oZCDb0JNL._AC_UL320_.jpg',
  alt: 'road to react book cover image',
  title: 'The Road to React: Your journey to master plain yet pragmatic React.js',
  author: 'Robin Wieruch'
};

const book2 = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/51Kwaw5nInL._SX379_BO1,204,203,200_.jpg',
  alt: 'learning react book cover image',
  title: 'Learning React: Modern Patterns for Developing React Apps',
  author: 'Eve Porcello, Alex Banks'
};

function Booklist(){
  return (
    <section className='booklist'>
      <Book 
        img={book1.img} 
        alt={book1.alt} 
        title={book1.title} 
        author={book1.author} 
      >
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum impedit ad eius illum rerum libero doloremque consequuntur in nemo voluptatem, quisquam, labore mollitia.
        </p>
      </Book>  
    
      <Book 
        img={book2.img} 
        alt={book2.alt} 
        title={book2.title} 
        author={book2.author} 
      />
    </section>
  );
}

// building Book component
// and destructure object props in function parameter
const Book = (props) => { 
  const { img, alt, title, author, children } = props;
  return (
      <article className='book'>
        <img
          src={img}
          alt={alt}
        />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {children}
    </article>
  );
};

ReactDom.render(<Booklist />, document.getElementById('root'));