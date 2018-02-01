import React from 'react';
import Footer from './components/footer';
import Navbar from './components/Navigation';
import Home from './components/home';
import 'normalize.css';
import 'styles/index.scss';

const App = () => (
  <div className='App'>
      <div>
        <Navbar/>
        <div>
          <Home/>
        </div>
      </div>
      <Footer />
  </div>
);

export default App;
