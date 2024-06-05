import React, { useState, useEffect } from 'react';
import './Bookself.css'

const BookshelfPage = () => {
  const [bookshelf, setBookshelf] = useState([]);

  useEffect(() => {
    const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    setBookshelf(storedBookshelf);
  }, []);

  return (
    <div className="bookshelf-page">
     <div className="bookself-heading"> <h2>My Bookshelf</h2></div>
      <div className="bookshelf-container">
        {bookshelf.map((book, index) => (
          <div key={index} className="book-card">
            <h3>{book.title}</h3>
            <p>{book.author_name && book.author_name.join(', ')}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookshelfPage;
