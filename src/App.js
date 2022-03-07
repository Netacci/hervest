import React from 'react';
import Dashboard from './components/Dashboard';
import { Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import Plans from './components/Plans';

const App = () => {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/plans' element={<Plans />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  );
};

export default App;
