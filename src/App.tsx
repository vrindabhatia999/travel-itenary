import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import UserModal from './components/UserModal';
import { v4 as uuid } from 'uuid';
import { UserContext } from './context/context';
import Header from './components/Header';
import DragDropImg from './components/DragDropImg';
import ItenaryCard from './components/ItenaryCard';
import ReactForm from './components/ReactForm';
export type User = {
  name: string;
  rank?: string;
  id: string;
};

function App() {
  const [userName, setUserName] = useState<string>('');
  const [isOpen, setIsOpen] = useState(true);
  const [userObj, setUserObj] = useState<User>({
    name: '',
    id: '',
  });
  useEffect(() => {
    setUserObj({
      name: userName,
      id: uuid().slice(0, 8),
    });
  }, [userName]);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className='App'>
      {isOpen && <UserModal setUserName={setUserName} onClose={onClose} />}
      <UserContext.Provider value={userObj}>
        <Header />
        <div className='itenary-container'>
          <DragDropImg />
          <ItenaryCard />
        </div>
      </UserContext.Provider>
    </div>
  );
}

export default App;
