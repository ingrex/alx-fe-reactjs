// src/App.jsx
import React from "react";
import WelcomeMessage from "./WelcomeMessage";

function App() {
  return (
    <div>
      <h1>Hello World!</h1>
      <p>This is a new paragraph.</p>
      <WelcomeMessage />
    </div>
  );
}
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <UserProfile 
        name="Alice" 
        age="25" 
        bio="Loves hiking and photography" 
      />
      <Footer />
    </>
  );
}

export default App;
