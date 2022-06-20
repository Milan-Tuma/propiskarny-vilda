import classes from './Buttons.module.css';

export const StdButton = (props) => {
	const { color = '' } = props;

	return (
		<button className={`${classes.btn} ${color && classes[color]}`} {...props}>
			{props.children}
		</button>
	);
};

export const IconButton = (props) => {
	const { color = '', animated = false } = props;

	return (
		<button
			className={`${classes['icon-btn']} ${animated && classes.animated} ${
				color && classes[color]
			}`}
			{...props}
		>
			{props.children}
		</button>
	);
};
