import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Counter from './counter.jsx'
import Handle from './handleClick.jsx';
import TodoList from './ToDoList.jsx'
import FriendStatus from './FriendStatus.jsx'
import BackgroundChanger from './BackgroundChanger.jsx'
import Login from './Login.jsx'
let user = { username: "Deepika", designation: "Instructor"};
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoList /> 
    <FriendStatus />
    <App />
    <Counter counter={15} user={user} />
    <Handle />
    <BackgroundChanger />
    <Login />
  </React.StrictMode>, 
)
