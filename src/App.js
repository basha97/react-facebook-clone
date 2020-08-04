import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from './Message';


function App() {

  const [input, setInput] = useState('');

  const [messages, setMessages] = useState([
    {username: 'Basha', text: 'hello'},
    {username: 'Adil', text: 'Hey'}
  ]);

  const [username, setUsername] = useState('');
  
  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([...messages, {username: username, text: input}]);
    setInput('');
  }

  useEffect(() => {
    setUsername(prompt('Please Enter your name'));
  }, [])



  return (
    <div className="App">
      <h1>Welcome to Basha Messenger</h1>
      <h2>Welcome {username}</h2>
      <form>
        <InputLabel>Enter a Message .....</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        
      <Button disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>Send Messages </Button>
      </form>
      {
        messages.map(m => (
          <Message username={username} message={m} />
        ))
      }
    </div>
  );
}

export default App;



// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/7.17.1/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/7.17.1/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>



// npm install -g firebase-tools

// firebase login

//firebase init

//firebase deploy


// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if
//           request.time < timestamp.date(2020, 9, 3);
//     }
//   }
// }
