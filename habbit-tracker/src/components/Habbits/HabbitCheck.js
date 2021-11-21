import styles from "./HabbitCheck.module.css";

const HabbitCheck = ({ value, onCheckHandler }) => {
	return (
		<div
			className={`${styles["habbit-check"]} ${
				value ? styles["habbit-check-checked"] : ""
			}`}
			onClick={onCheckHandler}
		></div>
	);
};
export default HabbitCheck;
