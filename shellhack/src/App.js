import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UploadPage from './components/UploadPage';
import SummaryPage from './components/SummaryPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/" element={<UploadPage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;