import React from 'react';

// Routing
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from './components/Header/Index';
import Home from './components/Home';
import Favorites from './components/Favorites';
import TrackDetails from './components/TrackDetails';
import NotFound from './components/NotFound';

// Used Styled components
import { GlobalStyle } from './GlobalStyles';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/track/:trackId" element={<TrackDetails/>} />
      <Route path="/favorites" element={<Favorites/>} />
      <Route path='/*' element={<NotFound />}/>
    </Routes>
    <GlobalStyle />
  </Router>
); 

export default App;