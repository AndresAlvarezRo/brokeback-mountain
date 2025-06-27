import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ContactForm from './components/ContactForm';
import ContactInfo from './components/ContactInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ContactForm />
      <ContactInfo />
      <Footer />
    </div>
  );
}

export default App;