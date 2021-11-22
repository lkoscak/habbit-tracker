import { useContext } from "react";

import habbitContext from "../store/habbit-context";

const useHabbitContext = () => {
	return useContext(habbitContext);
};

export default useHabbitContext;
