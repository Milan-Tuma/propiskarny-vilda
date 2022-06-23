import { StdButton } from '../UI/Buttons';

import classes from './Hero.module.css';

const heroData = {
	en: {
		imageAlt: 'Hero image',
		header: 'Individualize pens according to your needs',
		subheader: 'All products can be further customized.',
		btn: 'Visit our e-shop',
	},
	cs: {
		imageAlt: 'Úvodní obrázek',
		header: 'Unikátní propisky dle vašich představ',
		subheader: 'Všechny produkty je možné dále upravit.',
		btn: 'Navštivte náš e-shop',
	},
};

const Hero = ({ lang }) => {
	const heroHeader = heroData[lang].header.split(' ');
	const partOne = heroHeader.slice(0, 2).join(' ');
	const partTwo = heroHeader.slice(2).join(' ');

	const btnClickScroll = () => {
		const height = window.innerHeight;
		window.scrollBy(0, height);
	};

	return (
		<div className={classes.background}>
			<div className={classes.content}>
				<h1 className={classes.header}>
					{partOne} <span>{partTwo}</span>
				</h1>
				<div className={classes.btn} onClick={btnClickScroll}>
					<StdButton>{heroData[lang].btn}</StdButton>
				</div>
				<p className={classes.subheader}>{heroData[lang].subheader}</p>
			</div>
		</div>
	);
};

export default Hero;
