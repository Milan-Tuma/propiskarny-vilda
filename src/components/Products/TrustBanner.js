import classes from './TrustBanner.module.css';

const TrustBanner = ({ data = [] }) => {
	const items = data.map((item) => {
		return (
			<div className={classes.item}>
				<i className={item.icon} />
				<p>{item.content}</p>
			</div>
		);
	});

	return <div className={classes.grid}>{items}</div>;
};

export default TrustBanner;
