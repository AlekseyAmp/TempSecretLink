import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './assets/reset.scss';
import './assets/global.scss';

import routes from './routes';

function App() {
  return (
    <div className="container">
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.page />}
          />
        ))}
      </Routes>
    </div>
  );
}

export default App;
