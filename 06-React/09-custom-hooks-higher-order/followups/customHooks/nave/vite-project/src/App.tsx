 
import './App.css'
import Counter from './components/counter/Counter'
import React from 'react';
import useDocumentTitle from './hooks/useDocumentTitle';
import TitleComponent from './components/title/TitleComponent';
import TimerComponent from './components/timer/TimerComponent';

const App: React.FC = () => {
  const documentTitle = useDocumentTitle();

  return (
    <div>
      <h1>App Component</h1>
      <p>{documentTitle}</p>
      <TitleComponent />
      <Counter/> 
      <TimerComponent/>
    </div>
  );
};





export default App
