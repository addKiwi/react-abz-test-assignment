import React from 'react';
import './styles/App.scss';
import { Header } from './components/Header';
import { WGet } from './components/WGet';
import { WPost } from './components/WPost';

function App() {

  return (
    <div className="App">
      <Header />
      <WGet />
      <WPost />
    </div>
  );
}

export default App;
