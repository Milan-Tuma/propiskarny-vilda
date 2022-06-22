import { useContext } from 'react';

import { LangContext } from '../utils/context/lang-context';

import Hero from '../components/Standard/Hero';
import ProductArray from '../components/Products/ProductsArray';

const Home = () => {
	const { language } = useContext(LangContext);

	return (
		<div>
			<Hero lang={language} />
			<ProductArray />
		</div>
	);
};

export default Home;
