import styles from "./HabbitItem.module.css";

import HabbitCheck from "./HabbitCheck";

const HabbitItem = ({
	label,
	habbitValues,
	onHabbitCheckedHandler,
	onHabbitUnCheckedHandler,
}) => {
	const habitCheckItems = habbitValues.map((item, index) => (
		<HabbitCheck
			key={index}
			value={item.value}
			onClickHandler={
				item.value
					? onHabbitUnCheckedHandler.bind(null, index)
					: onHabbitCheckedHandler.bind(null, index)
			}
		></HabbitCheck>
	));
	return (
		<div className={styles.habbit}>
			<span className={styles["habbit-label"]}>{label}</span>
			<div className={styles["habbit-values"]}>{habitCheckItems}</div>
		</div>
	);
};

export default HabbitItem;
