import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div>
			<h1>Welcome to Propiskárny Vilda</h1>
			<nav>
				<Link to={'/authentication'}>Authentication</Link>
			</nav>
		</div>
	);
};

export default Home;
