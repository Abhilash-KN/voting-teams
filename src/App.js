import React from 'react';
import Voting from './components/Voting';
import styles from './components/styles.module.css';
function App() {
	return (
		<div className={styles.container}>
			<Voting />
		</div>
	);
}

export default App;
