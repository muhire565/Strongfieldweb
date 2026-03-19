import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Vision from './components/Vision';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import LoginModal from './components/LoginModal';
import CloudInfoModal from './components/CloudInfoModal';
import WhatsAppWidget from './components/WhatsAppWidget';
import './App.css';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isCloudInfoOpen, setIsCloudInfoOpen] = useState(false);

  const toggleLogin = () => setIsLoginOpen(!isLoginOpen);
  const toggleCloudInfo = () => setIsCloudInfoOpen(!isCloudInfoOpen);

  const handleLoginAttempt = () => {
    setIsLoginOpen(false);
    setIsCloudInfoOpen(true);
  };

  return (
    <div className="relative min-h-screen">
      <Navbar onLoginClick={toggleLogin} />
      
      <main>
        <Hero onGetStartedClick={toggleLogin} />
        <Services />
        <Vision />
        <Testimonials />
        <Contact />
      </main>

      <Footer />

      {/* Modals & Widgets */}
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={toggleLogin} 
        onLogin={handleLoginAttempt}
      />
      <CloudInfoModal 
        isOpen={isCloudInfoOpen} 
        onClose={toggleCloudInfo} 
      />
      <WhatsAppWidget />
    </div>
  );
}

export default App;
