import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormPage from 'pages/formPage';
import Layout from 'components/layout';

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route index element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
