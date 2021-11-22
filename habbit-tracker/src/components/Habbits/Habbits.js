import styles from "./Habbits.module.css";

import useHabbitContext from "../../hooks/use-habbit-context";

import Card from "../UI/Card";
import HabbitsHeader from "./HabbitsHeader";
import HabbitItem from "./HabbitItem";

const Habbits = () => {
	const habbitCtx = useHabbitContext();
	const onCheckedHandler = (month, habbit, day) => {
		habbitCtx.checkHabbit(month, day, habbit);
	};
	const onUnCheckedHandler = (month, habbit, day) => {
		habbitCtx.unCheckHabbit(month, day, habbit);
	};
	const habbitItems = habbitCtx.habbits.map((habbit) => {
		const habbitValues = habbitCtx.months
			.find((month) => month.id === "11_2021")
			.days.map((day) => {
				return { value: day.includes(habbit.id) };
			});
		return (
			<HabbitItem
				key={habbit.id}
				label={habbit.name}
				habbitValues={habbitValues}
				onHabbitCheckedHandler={onCheckedHandler.bind(
					null,
					"11_2021",
					habbit.id
				)}
				onHabbitUnCheckedHandler={onUnCheckedHandler.bind(
					null,
					"11_2021",
					habbit.id
				)}
			></HabbitItem>
		);
	});
	return (
		<section className={styles.habbits}>
			<Card backgroundColor="#ADC2A9">
				<HabbitsHeader numOfDays={30}></HabbitsHeader>
				{habbitItems}
			</Card>
		</section>
	);
};
export default Habbits;
