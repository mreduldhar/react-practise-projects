import React from 'react';
import Accordion from './components/accordion/Accordion.jsx';
import faqs from './data/faq.js';

const App = () => {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
};

export default App;