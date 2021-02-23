import React, { useState } from 'react';
import SearchForm from './components/SearchForm';
import { Container } from 'react-bootstrap';
import './WelcomePage.css';

/// Finish Layout + Design. Just have the search bar in the middle of the page.
/// Have the search bar redirect to the Album Card Component.

const WelcomePage = ({ history }) => {
  const [artist, setArtist] = useState('');
  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push(`/albumcardpage/${artist}`);
  };

  return (
    <div className="main">
      
      <SearchForm handleSubmitProp={handleSubmit} setArtist={setArtist} className="search-form"/>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        
      </Container>
    </div>
  );
};

export default WelcomePage;
