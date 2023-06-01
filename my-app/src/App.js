import styles from '.app.module.css';

export const App = () => {
	return (
		<div className={styles.app}>
			<label className={styles.appLabel}>Приложение</label>
			<div>Разная информация приложения</div>
			<div className={styles.user}>
				<label>Пользователь:</label>
			</div>
		</div>
	);
};
