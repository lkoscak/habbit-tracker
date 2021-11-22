const habbitReducer = (state, action) => {
	if (action.type === "CHECK") {
		return {
			habbits: state.habbits.map((habbit) => {
				return { ...habbit };
			}),
			months: state.months.map((month) => {
				return {
					...month,
					days: month.days.map((day, index) => {
						let updatedDay = [...day];
						if (
							month.id === action.payload.monthId &&
							index === action.payload.day
						) {
							updatedDay.push(action.payload.habbitId);
						}
						return updatedDay;
					}),
				};
			}),
		};
	}
	if (action.type === "UNCHECK") {
		return {
			habbits: state.habbits.map((habbit) => {
				return { ...habbit };
			}),
			months: state.months.map((month) => {
				return {
					...month,
					days: month.days.map((day, index) => {
						let updatedDay = [...day];
						if (
							month.id === action.payload.monthId &&
							index === action.payload.day
						) {
							updatedDay.splice(updatedDay.indexOf(action.payload.habbitId), 1);
						}
						return updatedDay;
					}),
				};
			}),
		};
	}
	return state;
};

export default habbitReducer;
