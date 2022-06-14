import { useContext } from 'react';

import { LangContext } from '../utils/context/lang-context';

import Hero from '../components/Standard/Hero';
import About from '../components/Standard/About';
import ProductList from '../components/Products/ProductList';

const Home = () => {
	const { language } = useContext(LangContext);

	return (
		<div>
			<Hero lang={language} />
			{/* <About /> */}
			<ProductList />
		</div>
	);
};

export default Home;
