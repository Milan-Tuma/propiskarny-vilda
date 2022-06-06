import './App.css';
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './utils/firebase';

const App = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [currentUser, setCurrentUser] = useState();
	const [notification, setNotification] = useState();

	const formSubmitHandler = (e) => {
		e.preventDefault();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredentials) => {
				setCurrentUser(userCredentials.user);
				setNotification('User created');
			})
			.catch((error) => {
				setNotification(error.message);
			});
	};

	return (
		<div className="App">
			<form onSubmit={formSubmitHandler}>
				<input
					type="email"
					placeholder="Enter email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Enter password"
					onChange={(e) => setPassword(e.target.value)}
					minLength={6}
				/>
				<button>Sign Up</button>
				{notification && <div>{notification}</div>}
			</form>
		</div>
	);
};

export default App;
