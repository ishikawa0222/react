import logo from './logo.svg';
import './App.css';
import './Message';
import Message from './Message';
import ItemList from './ItemList';
import Example from './Example';
import React, {useState} from 'react';


function App() {
  var users = [
    { id: 1, name: 'Alice', email: 'alice@test.com', password: '1111' },
    { id: 2, name: 'Bob', email: 'bob@test.com', password: '1111' },
    { id: 3, name: 'Chris', email: 'chris@test.com', password: '1111' },
];

  
  return (
    <div className="App">
      <h2>React Hello</h2>
      <p>こんにちは!</p>
      <Message message="親コンポーネントからデータを受け渡し"/>
      <ItemList users={users} />
    </div>
  );
}

export default App;
