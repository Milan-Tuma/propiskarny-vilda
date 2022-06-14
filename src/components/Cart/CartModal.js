import classes from './CartModal.module.css';

const CartModal = ({ lang, onClose }) => {
	return (
		<>
			<div className={classes.wrapper}>Cart Modal</div>
			<div className={classes.background} onClick={() => onClose(false)}></div>
		</>
	);
};

export default CartModal;
