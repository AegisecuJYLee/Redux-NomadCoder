import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../routes/Home';
import Detail from '../routes/Detail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact Component={Home}></Route>
        <Route path='/:id' Component={Detail}></Route>
      </Routes>
    </Router>
  );
}

export default App;