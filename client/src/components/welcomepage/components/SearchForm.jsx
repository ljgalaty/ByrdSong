import React from 'react';
import { Form } from 'react-bootstrap';
import './SearchForm.css';

// Finish Design

const SearchForm = ({ handleSubmitProp, setArtist }) => {
  return (
    <Form onSubmit={handleSubmitProp} className="search-form" style={{ margin: '2rem' }}>
      <div className="searchContainer">
        <input
          type="text"
          placeholder="Search..."
          className="searchInput"
          onChange={(e) => setArtist(e.target.value)}
        />
        <div className="search"></div>
      </div>
    </Form>
  );
};
export default SearchForm;
