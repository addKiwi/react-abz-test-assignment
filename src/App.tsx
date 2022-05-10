import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import { WGet } from './components/WGet';

function App() {

  return (
    <div className="App">
      <Header />
      <WGet />
    </div>
  );
}

export default App;
