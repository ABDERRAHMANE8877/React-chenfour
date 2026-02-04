import './css/App.css';
import Headers from './components/Header';
import TextField from './components/TextField';
import React from 'react';
import ButtonPanel from './components/ButtonPanel'
import DayOfWeek from './components/DayOfWeek';
import Timer from './components/Timer';
import AuthorManager from './author-manager/AuthorManager';
function App() {
  let version = React.version;
  return (
    <div >
      <Headers title="Introduction à React sous Node.js" version={version} />
      <TextField label="Nom" size="30" />
      <TextField label="Prénom" size="30" />
      <TextField label="Adresse" size="50" />
      <ButtonPanel labels={['OK','Annuler','Imprimer']} />
      <DayOfWeek />
      <Timer />
      <AuthorManager />
    </div>  
  );
}

export default App;
