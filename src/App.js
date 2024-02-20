import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './components/register/register';
import LoginForm from './components/login/login';
import Dashboard from './components/Dashboard/Dashboard';
import Leaderboard from './components/Leaderboard/Leaderboard';
import UserList from './components/UserList/UserList'; // Import UserList component

const App = () => {
	const handleRegisterSuccess = () => {
		console.log('Register success!');
	};

	return (
		<Router>
			<Routes>
				<Route path="/dashboard" element={<Dashboard />} />
				<Route
					path="/register"
					element={<RegisterForm onRegisterSuccess={handleRegisterSuccess} />}
				/>
				<Route path="/login" element={<LoginForm />} />
				<Route path="/leaderboard" element={<Leaderboard />} />
				<Route path="/userlist" element={<UserList />} />{' '}
				{/* Add UserList route */}
				<Route path="/" element={<LoginForm />} />
			</Routes>
		</Router>
	);
};

export default App;
