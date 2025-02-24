import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageTransition from './components/PageTransition/PageTransition';
import CreateAccountPage from './pages/CreateAccountPage/CreateAccountPage';
import SuccessPage from './pages/SuccessPage/SuccessPage';
import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes>
        <Route
          path='/'
          element={
            <PageTransition direction='left'>
              <CreateAccountPage />
            </PageTransition>
          }
        />
        <Route
          path='/success'
          element={
            <PageTransition direction='right'>
              <SuccessPage />
            </PageTransition>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
