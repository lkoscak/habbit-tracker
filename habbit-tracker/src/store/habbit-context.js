import React from "react";

const habbitContext = React.createContext({
	habbits: [],
	months: [],
	checkHabbit: (month, day, habbit) => {},
	unCheckHabbit: (month, day, habbit) => {},
	addHabbit: (habbit) => {},
	removeHabbit: (id) => {},
	addMonth: (id) => {},
});

export default habbitContext;
