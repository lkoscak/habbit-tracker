import styles from "./MonthFilter.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faChevronLeft,
	faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MonthFilter = (props) => {
	return (
		<section className={styles["month-filter"]}>
			<FontAwesomeIcon
				icon={faChevronLeft}
				className={styles.picker}
				onClick={props.onMonthChanged.bind(null, -1)}
			/>
			<h1>{props.title}</h1>
			<FontAwesomeIcon
				icon={faChevronRight}
				className={styles.picker}
				onClick={props.onMonthChanged.bind(null, 1)}
			/>
		</section>
	);
};
export default MonthFilter;
