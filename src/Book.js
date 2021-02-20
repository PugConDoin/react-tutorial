import React from 'react'

const Book = ({ img, alt, title, author }) => { 
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

export default Book