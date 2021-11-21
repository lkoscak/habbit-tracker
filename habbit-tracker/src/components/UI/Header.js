import styles from "./Header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<h1>Habbit tracker</h1>
			<p>Keep your habbits on track!</p>
		</div>
	);
};
export default Header;
