import styles from "./HabbitCheck.module.css";

const HabbitCheck = ({ value, onClickHandler }) => {
	return (
		<div
			className={`${styles["habbit-check"]} ${
				value ? styles["habbit-check-checked"] : ""
			}`}
			onClick={onClickHandler}
		></div>
	);
};
export default HabbitCheck;
