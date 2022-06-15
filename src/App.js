import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ShoppingCart from './pages/ShoppingCart';

const App = () => {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/shopping-cart" element={<ShoppingCart />} />
			</Routes>
		</div>
	);
};

export default App;
