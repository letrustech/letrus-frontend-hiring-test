import React from 'react';
import Characters from './components/Characters';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import { store } from './utils/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/personagens" element={<Characters characterId={5} />} />
          <Route path="/" element={<Characters characterId={5} />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;



