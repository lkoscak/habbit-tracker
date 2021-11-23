import { useReducer } from "react";

import habbitContext from "./habbit-context";
import habbitReducer from "./habbit-reducer";

const defaultHabbitState = {
	habbits: [
		{
			id: "h1",
			name: "Habbit 1",
		},
		{
			id: "h2",
			name: "Habbit 2",
		},
	],
	months: [
		{
			id: "11_2021",
			days: [...Array(30).keys()].map((key) => {
				const array = [];
				if (key % 3 === 0) array.push("h1");
				if (key % 4 === 0) array.push("h2");
				return array;
			}),
		},
	],
};

const HabbitProvider = (props) => {
	const [habbitState, dispatchHabbitAction] = useReducer(
		habbitReducer,
		defaultHabbitState
	);
	const checkHabbitHandler = (month, day, habbit) => {
		dispatchHabbitAction({
			type: "CHECK",
			payload: { monthId: month, day, habbitId: habbit },
		});
	};
	const unCheckHabbitHandler = (month, day, habbit) => {
		dispatchHabbitAction({
			type: "UNCHECK",
			payload: { monthId: month, day, habbitId: habbit },
		});
	};
	const addHabbitHandler = (habbit) => {
		dispatchHabbitAction({ type: "ADD_HABBIT", payload: habbit });
	};
	return (
		<habbitContext.Provider
			value={{
				...habbitState,
				checkHabbit: checkHabbitHandler,
				unCheckHabbit: unCheckHabbitHandler,
				addHabbit: addHabbitHandler,
			}}
		>
			{props.children}
		</habbitContext.Provider>
	);
};

export default HabbitProvider;
