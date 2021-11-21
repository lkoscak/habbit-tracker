import moment from "moment";

import styles from "./Habbits.module.css";

import Card from "../UI/Card";
import HabbitsHeader from "./HabbitsHeader";
import HabbitItem from "./HabbitItem";

const dummy_items = [...Array(moment().daysInMonth()).keys()].map((key) => {
	return {
		day: key + 1,
		value: key % 2 === 0,
	};
});

const Habbits = () => {
	const numOfDaysInMonth = moment().daysInMonth();
	return (
		<section className={styles.habbits}>
			<Card backgroundColor="#ADC2A9">
				<HabbitsHeader numOfDays={numOfDaysInMonth}></HabbitsHeader>
				<HabbitItem label="Habbit 1" habitValues={dummy_items}></HabbitItem>
			</Card>
		</section>
	);
};
export default Habbits;
