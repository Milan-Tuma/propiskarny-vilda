import classes from './ProductCard.module.css';

const ProductCard = ({ data, language }) => {
	return (
		<div>
			<div className={classes.image}>
				<img src={data.imageUrl} alt={data.lang[language].productName} />
			</div>
			<div></div>
		</div>
	);
};

export default ProductCard;
