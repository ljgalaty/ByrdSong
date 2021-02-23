import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavMenu from './components/navmenu/NavMenu';
import AboutUs from './components/aboutus/AboutUs';
import AlbumPage from './components/albumpage/AlbumPage';
import WelcomePage from './components/welcomepage/WelcomePage';
import AlbumCardPage from './components/albumcardpage/AlbumCardPage';
import './App.css';

const ByrdSong = () => {
  return (

    <BrowserRouter>
      <NavMenu />
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route exact path="/aboutus" component={AboutUs} />
        <Route exact path="/albumpage/:id" component={AlbumPage} />
        <Route exact path="/albumcardpage/:artist" component={AlbumCardPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default ByrdSong;
