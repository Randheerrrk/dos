import {useState} from 'react'
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"

import './App.css';
import Header from './components/Header/Header'
import Users from './components/Users/Users'
import DOS from './components/DOS/DOS'

function App() {

  const [userList, setUserList] = useState({})

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/users' exact element={<Users userList={userList} setUserList={setUserList}/>}/>
        <Route path='/dos' exact element={<DOS userList={userList}/>}/>
        <Route path="/" element={<Navigate replace={true} to='/users' />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
