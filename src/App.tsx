import React from 'react';
// import logo from './logo.svg';
import { useForm } from 'react-hook-form'
import './App.css';

function App() {
  const { register } = useForm<FormProps>()

  return (
    <div className="App">
      <header className="App-header">
        <input ref={register()} name="username" data-testid="input" />
      </header>
    </div>
  );
}

export default App;
