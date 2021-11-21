import styles from "./HabbitItem.module.css";

import HabbitCheck from "./HabbitCheck";

const HabbitItem = ({ label, habitValues }) => {
	const habitCheckItems = habitValues.map((item) => (
		<HabbitCheck value={item.value}></HabbitCheck>
	));
	return (
		<div className={styles.habbit}>
			<span className={styles["habbit-label"]}>{label}</span>
			<div className={styles["habbit-values"]}>{habitCheckItems}</div>
		</div>
	);
};

export default HabbitItem;
