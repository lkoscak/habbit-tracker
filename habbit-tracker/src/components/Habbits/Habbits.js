import { useCallback } from "react";

import useHabbitContext from "../../hooks/use-habbit-context";

import styles from "./Habbits.module.css";

import Card from "../UI/Card";
import HabbitsHeader from "./HabbitsHeader";
import HabbitItem from "./HabbitItem";
import HabbitForm from "./HabbitForm";

const Habbits = ({ monthId, numOfDays }) => {
	const habbitCtx = useHabbitContext();
	const numOfHabbits = habbitCtx.habbits.length;
	const onCheckedHandler = (month, habbit, day) => {
		habbitCtx.checkHabbit(month, day, habbit);
	};
	const onUnCheckedHandler = (month, habbit, day) => {
		habbitCtx.unCheckHabbit(month, day, habbit);
	};
	const onNewHabbitCreatedHandler = useCallback(
		(name) => {
			const newHabbit = {
				id: Math.random(),
				name,
			};
			habbitCtx.addHabbit(newHabbit);
		},
		[habbitCtx]
	);
	const onHabbitRemoveHandler = (habbitId) => {
		habbitCtx.removeHabbit(habbitId);
	};
	const habbitItems = habbitCtx.habbits.map((habbit) => {
		const habbitValues = habbitCtx.months
			.find((month) => month.id === monthId)
			.days.map((day) => {
				return { value: day.includes(habbit.id) };
			});
		return (
			<HabbitItem
				key={habbit.id}
				label={habbit.name}
				habbitValues={habbitValues}
				onHabbitCheckedHandler={onCheckedHandler.bind(null, monthId, habbit.id)}
				onHabbitUnCheckedHandler={onUnCheckedHandler.bind(
					null,
					monthId,
					habbit.id
				)}
				onHabbitRemove={onHabbitRemoveHandler.bind(null, habbit.id)}
			></HabbitItem>
		);
	});
	return (
		<>
			<Card backgroundColor="#ADC2A9">
				<div className={styles["habbits-container"]}>
					<HabbitsHeader numOfDays={numOfDays}></HabbitsHeader>
					<div className={styles.habbits}>{habbitItems}</div>
					<HabbitForm
						onNewHabbitCreated={onNewHabbitCreatedHandler}
						numOfHabbits={numOfHabbits}
					></HabbitForm>
				</div>
			</Card>
		</>
	);
};
export default Habbits;
