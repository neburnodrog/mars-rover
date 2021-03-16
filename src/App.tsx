import * as React from 'react';
import './App.css';
import { Header } from './components/Header';
import { Mars } from './components/Mars';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <Mars></Mars>
    </div>
  );
};

export default App;
