import React,{useState} from 'react'
import LogIn from './components/LogIn';
import Modal from './components/Modal';




import './styles/App.css';

function App() {

  
  const [modalActive, setModalActive]=useState(false);
 
  return (
    <div className="App">
        
      <LogIn/>
  
      {/*<Modal active={modalActive} setActive={setModalActive} id={selectObjectId} data={WashList}/>*/}
    </div>
    
  );
}

export default App;
