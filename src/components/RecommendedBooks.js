import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import './Recommended.css';
const RecommendedBooks = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const predefinedBooks = [
      'To Kill a Mockingbird',
      '1984',
      'Pride and Prejudice',
      'The Great Gatsby',
      'Moby Dick',
      'War and Peace',
      'The Catcher in the Rye',
      'The Hobbit',
      'Fahrenheit 451',
      'Jane Eyre'
    ];

    const fetchBooks = async () => {
      const promises = predefinedBooks.map(title =>
        axios.get(`https://openlibrary.org/search.json?q=${title}&limit=1`)
      );

      const results = await Promise.all(promises);
      const booksData = results.map(res => res.data.docs[0]);
      setBooks(booksData);
    };

    fetchBooks();
  }, []);

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.some(b => b.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
    }
  };

  return (
    <div className="home-page">
      <div className='recommended-heading'>
      <h2>Recommended Books</h2>
      </div>
      <div className="results-container">
        {books.map((book) => (
          <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedBooks;
