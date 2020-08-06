import React, { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from "firebase";
import FlipMove from "react-flip-move";
import SendIcon from "@material-ui/icons/Send";
import {IconButton} from "@material-ui/core";

function App() {
	const [input, setInput] = useState("");

	const [messages, setMessages] = useState([]);

	const [username, setUsername] = useState("");

	const sendMessage = (event) => {
		event.preventDefault();
		console.log(username);
		console.log(input);
		console.log(messages);
		db.collection("messages")
			.add({
				message: input,
				username: username,
				timestamp: firebase.firestore.FieldValue.serverTimestamp(),
			});
		setMessages([...messages, { username: username, message: input }]);
		setInput("");
	};

	useEffect(() => {
		setUsername(prompt("Please Enter your name"));
	}, []);

	useEffect(() => {
		db.collection("messages")
			.orderBy("timestamp", "desc")
			.onSnapshot((snapshot) => {
				setMessages(
					snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
				);
			});
	}, []);

	return (
		<div className="App">
			<img src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100" />
			<h1>Welcome to Messenger Clone</h1>
			<h2>Welcome {username}</h2>
			<form className="app__form">
				<FormControl className="app__formcontrol">
					<InputLabel>Enter a Message .....</InputLabel>
					<Input 
					className="app__input"
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>

					<IconButton
					className= "app__iconbutton"
						disabled={!input}
						variant="contained"
						color="primary"
						type="submit"
						onClick={sendMessage}
					>
						<SendIcon />
					</IconButton>
				</FormControl>
			</form>

			<FlipMove>
				{messages.map(({ id, message }) => (
					<Message key={id} message={message} username={username} />
				))}
			</FlipMove>
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
