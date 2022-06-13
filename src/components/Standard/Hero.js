import classes from './Hero.module.css';

const heroData = {
	en: {
		imageAlt: 'Hero image',
		header: 'Writing history since 2010',
		subheader:
			'Our journey started with a high school project for two students, who turned out to be co-founders of pen manufacturing company Vilda Ltd. Since then the company faced many challenges and opportunities until we became a stable manufacturer in the market with the highest competitiveness.',
	},
	cs: {
		imageAlt: 'Úvodní obrázek',
		header: 'Píšeme historii od 2010',
		subheader:
			'Naše cesta započala středoškolním projektem pro dva studenty, kteří se stali spoluzakladateli Propiskáren Vilda s.r.o. Od této chvíle čelila naše společnost mnoha výzvám a příležitostem, až se nakonec stala stabilním výrobcem na trhu s nejvyšší konkurenceschopností.',
	},
};

const Hero = ({ lang }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.image}>
				<img src="/layout/hero-image.jpg" alt={heroData[lang].imageAlt} />
			</div>
			<div className={classes.text}>
				<h1>{heroData[lang].header}</h1>
				<p>{heroData[lang].subheader}</p>
			</div>
		</div>
	);
};

export default Hero;
