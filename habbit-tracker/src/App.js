import moment from "moment";

import { useState } from "react";

import useHabbitContext from "./hooks/use-habbit-context";

import Header from "./components/UI/Header";
import MonthFilter from "./components/Filter/MonthFilter";
import Habbits from "./components/Habbits/Habbits";

const App = () => {
	const habbitCtx = useHabbitContext();
	const [dateFilter, setDateFilter] = useState(moment());

	const selectedMonth = habbitCtx.months.find(
		(month) => month.id === `${dateFilter.month() + 1}_${dateFilter.year()}`
	);
	if (!selectedMonth) {
		habbitCtx.addMonth({
			id: `${dateFilter.month() + 1}_${dateFilter.year()}`,
			days: [...Array(dateFilter.daysInMonth()).keys()].map((_key) => {
				return [];
			}),
		});
	}

	const monthId = `${dateFilter.month() + 1}_${dateFilter.year()}`;
	const filterTitle = dateFilter.format("MMMM yyyy.");
	const numOfDaysInMonth = dateFilter.daysInMonth();

	const changeMonthHandler = (value) => {
		setDateFilter((currentDateFilter) => {
			const newDate =
				value > 0
					? moment(currentDateFilter).add(value, "months")
					: moment(currentDateFilter).subtract(Math.abs(value), "months");
			return newDate;
		});
	};

	return (
		<>
			<Header></Header>
			<MonthFilter
				title={filterTitle}
				onMonthChanged={changeMonthHandler}
			></MonthFilter>
			<Habbits monthId={monthId} numOfDays={numOfDaysInMonth}></Habbits>
		</>
	);
};

export default App;
