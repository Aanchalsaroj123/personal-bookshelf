import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';
import { FaSearch } from 'react-icons/fa';
import './SearchPage.css';
import RecommendedBooks from './RecommendedBooks';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSearch = async () => {
    if (query.length > 2) {
      setLoading(true); 
      const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`);
      setResults(response.data.docs);
      setLoading(false); 
    }
  };

  const addToBookshelf = (book) => {
    let bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
    if (!bookshelf.some(b => b.key === book.key)) {
      bookshelf.push(book);
      localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
      setSuccessMessage(`${book.title} added successfully!`);
      setTimeout(() => setSuccessMessage(''), 3000);
    }
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for books..."
          className="search-input"
        />
        <FaSearch className="search-icon" onClick={handleSearch} />
      </div>
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="results-container">
        {loading ? (
          <p className="loading-message">Loading...</p>
        ) : results.length === 0 && query.length > 2 ? (
          <p className="no-results-message">No books found</p>
        ) : (
          results.map((book) => (
            <BookCard key={book.key} book={book} addToBookshelf={addToBookshelf} />
          ))
        )}
      </div>
      <br />
      <RecommendedBooks/>
    </div>
  );
};

export default SearchPage;
