import { useContext } from 'react';

import { LangContext } from '../utils/context/lang-context';

import Hero from '../components/Standard/Hero';
import ProductArray from '../components/Products/ProductsArray';
import About from '../components/Standard/About';

const Home = () => {
	const { language } = useContext(LangContext);

	return (
		<div>
			<Hero lang={language} />
			<ProductArray />
			<About lang={language} />
		</div>
	);
};

export default Home;
