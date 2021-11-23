import { useRef } from "react";

import styles from "./HabbitForm.module.css";

const HabbitForm = ({ onNewHabbitCreated }) => {
	const habbitInputRef = useRef();
	const validateInput = (value) => {
		return {
			isValid: value.trim() !== "",
		};
	};
	const onKeyDownHandler = (e) => {
		if (e.key === "Enter") {
			if (validateInput(habbitInputRef.current.value).isValid) {
				onNewHabbitCreated(habbitInputRef.current.value);
				habbitInputRef.current.value = "";
				habbitInputRef.current.blur();
			}
		}
	};
	return (
		<div className={`${styles["form-group"]} ${styles.field}`}>
			<input
				type="input"
				className={styles["form-field"]}
				placeholder="New habbit"
				name="habbit"
				id="habbit"
				spellCheck="false"
				autoComplete="off"
				maxLength="20"
				onKeyDown={onKeyDownHandler}
				ref={habbitInputRef}
			/>
			<label for="habbit" className={styles["form-label"]}>
				New habbit
			</label>
		</div>
	);
};

export default HabbitForm;
