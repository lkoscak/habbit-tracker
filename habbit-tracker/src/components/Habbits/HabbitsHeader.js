import styles from "./HabbitItem.module.css";

const HabbitsHeader = ({ numOfDays }) => {
	const headerItems = [...Array(numOfDays).keys()].map((item) => (
		<div key={item}>{`${item + 1}.`}</div>
	));
	return (
		<div className={`${styles.habbit} ${styles["habbits-header"]}`}>
			<span className={styles["habbit-label"]}>Days</span>
			<div className={styles["habbit-values"]}>{headerItems}</div>
		</div>
	);
};
export default HabbitsHeader;
