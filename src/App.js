import React from 'react';
import './App.css';
import Container from './Components/Container/Container';

import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import HomeTextHero from "./Components/HomeTextHero/HomeTextHero";
import Sponsosrs from "./Components/Sponsors/Sponsors";
import Speakers from "./Components/Speakers/Speakers";

function App() {
  return (
    <div className="app">
        <Header />

        <HeroSection />

        <HomeTextHero />

        <Container />
        
        <Sponsosrs />

        <Speakers />
    </div>
  );
}

export default App;
