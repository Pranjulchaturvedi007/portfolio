import React from 'react';
import Header from './components/header';
import Intro from './components/intro';
import About from './components/about';
import Contact from './components/contact';

const App = () => {
  return (
    <div className='w-screen bg-neutral-900 text-white min-h-screen'>
      <div className='max-w-3xl w-full mx-auto '>
      <Header />
      <Intro />
      <About />
      <Contact />
      </div>
    </div>
  );
};

export default App;
