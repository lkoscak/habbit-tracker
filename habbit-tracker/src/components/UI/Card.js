import styles from "./Card.module.css";

const Card = (props) => {
	return (
		<div
			className={styles.card}
			style={{ backgroundColor: props.backgroundColor || "white" }}
		>
			{props.children}
		</div>
	);
};

export default Card;
