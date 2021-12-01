import { useReducer, useEffect } from "react";

import moment from "moment";

import LocalStorage from "./local-storage-helper";

import habbitContext from "./habbit-context";
import habbitReducer from "./habbit-reducer";

const defaultHabbitState = {
	habbits: [],
	months: [
		{
			id: `${moment().month() + 1}_${moment().year()}`,
			days: [...Array(moment().daysInMonth()).keys()].map((_key) => {
				return [];
			}),
		},
	],
};

const HabbitProvider = (props) => {
	const [habbitState, dispatchHabbitAction] = useReducer(
		habbitReducer,
		defaultHabbitState
	);

	useEffect(() => {
		const initialHabbitState = LocalStorage.get("habbitTrackerData");
		if (initialHabbitState) {
			dispatchHabbitAction({
				type: "SET_INITIAL",
				payload: initialHabbitState,
			});
		}
	}, []);
	useEffect(() => {
		LocalStorage.set("habbitTrackerData", habbitState);
	}, [habbitState]);

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
	const removeHabbitHandler = (habbitId) => {
		dispatchHabbitAction({ type: "REMOVE_HABBIT", payload: habbitId });
	};
	const addMonthHandler = (month) => {
		dispatchHabbitAction({ type: "ADD_MONTH", payload: month });
	};
	return (
		<habbitContext.Provider
			value={{
				...habbitState,
				checkHabbit: checkHabbitHandler,
				unCheckHabbit: unCheckHabbitHandler,
				addHabbit: addHabbitHandler,
				removeHabbit: removeHabbitHandler,
				addMonth: addMonthHandler,
			}}
		>
			{props.children}
		</habbitContext.Provider>
	);
};

export default HabbitProvider;
