import React, { useRef } from "react";

import styles from "./HabbitForm.module.css";

const HabbitForm = ({ onNewHabbitCreated, numOfHabbits }) => {
	console.log(numOfHabbits);
	const habbitInputRef = useRef();
	const maxNumberOfHabbitsReached = numOfHabbits === 10;
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
		<>
			{maxNumberOfHabbitsReached ? (
				<p>Good job! Max number of habbits reached :D</p>
			) : (
				<div className={`${styles["form-group"]}`}>
					<input
						disabled={maxNumberOfHabbitsReached ? "disabled" : ""}
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

					<label htmlFor="habbit" className={styles["form-label"]}>
						New habbit
					</label>
				</div>
			)}
		</>
	);
};

export default React.memo(HabbitForm);
