import React from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Counter from './components/counter/COunter';
import ExternalUser from './components/externalUser/ExternalUser';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Header/>
      <Home/>
      <Counter/>
      <ExternalUser/>
      <Footer/>
    </div>
  );
};

export default App;