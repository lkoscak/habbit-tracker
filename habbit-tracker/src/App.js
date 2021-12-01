import moment from "moment";

import { useState } from "react";

import useHabbitContext from "./hooks/use-habbit-context";

import Header from "./components/UI/Header";
import MonthFilter from "./components/Filter/MonthFilter";
import Habbits from "./components/Habbits/Habbits";

const App = () => {
	const habbitCtx = useHabbitContext();
	const [dateFilter, setDateFilter] = useState(moment());

	const monthId = `${dateFilter.month() + 1}_${dateFilter.year()}`;
	const filterTitle = dateFilter.format("MMMM yyyy.");
	const numOfDaysInMonth = dateFilter.daysInMonth();

	const changeMonthHandler = (value) => {
		const newDate =
			value > 0
				? moment(dateFilter).add(value, "months")
				: moment(dateFilter).subtract(Math.abs(value), "months");
		const selectedMonth = habbitCtx.months.find(
			(month) => month.id === `${newDate.month() + 1}_${newDate.year()}`
		);
		if (!selectedMonth) {
			habbitCtx.addMonth({
				id: `${newDate.month() + 1}_${newDate.year()}`,
				days: [...Array(newDate.daysInMonth()).keys()].map((_key) => {
					return [];
				}),
			});
		}
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
