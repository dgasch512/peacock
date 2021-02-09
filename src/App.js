import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import Social from './components/Social';
import Quote from './components/Quote';
// import Scroll from './components/Scroll';
import CardList from './components/CardList';
import Contact from './components/Contact';
import './styles/styles.css';

function App() {
  return (
    <body className="App">
      <Navbar />
        <div className='main'>
            <Intro />
            <Social />
            <Quote />
            <CardList />
            <Contact />
        </div>
    </body>
  );
}

export default App;
