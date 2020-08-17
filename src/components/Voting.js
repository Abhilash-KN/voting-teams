import React, { useState } from 'react';
import styles from './styles.module.css';
import barcelona from '../images/barcelona.png';
import bayernMunich from '../images/bayern_munich.png';
import liverPool from '../images/liverpool.jpg';
import realMadrid from '../images/real_madrid.jpg';

function Voting() {
	const [votes, addVotes] = useState([0, 0, 0, 0]);
	function vote(e) {
		let v = [...votes];
		v[parseInt(e.target.name)]++;
		addVotes([...v]);
	}
	return (
		<div className={styles.voting}>
			<div className={styles.header}>Vote your favourite team</div>
			<div className={styles.teams}>
				<div class={styles.team}>
					<div className={styles.imgContainer}>
						<img className={styles.image} src={barcelona} alt='' />
					</div>
					<div className={styles.name}>FC Barcelona</div>
					<div className={styles.vote}>
						<div className={styles.votes}>{votes[0]}</div>
						<button
							className={styles.button}
							name='0'
							onClick={(e) => vote(e)}>
							Vote
						</button>
					</div>
				</div>
				<div class={styles.team}>
					<div className={styles.imgContainer}>
						<img className={styles.image} src={realMadrid} alt='' />
					</div>
					<div className={styles.name}>Real Madrid</div>
					<div className={styles.vote}>
						<div className={styles.votes}>{votes[1]}</div>
						<button
							className={styles.button}
							name='1'
							onClick={(e) => vote(e)}>
							Vote
						</button>
					</div>
				</div>
				<div class={styles.team}>
					<div className={styles.imgContainer}>
						<img
							className={styles.image}
							src={bayernMunich}
							alt=''
						/>
					</div>
					<div className={styles.name}>FC Bayern Munich</div>
					<div className={styles.vote}>
						<div className={styles.votes}>{votes[2]}</div>
						<button
							className={styles.button}
							name='2'
							onClick={(e) => vote(e)}>
							Vote
						</button>
					</div>
				</div>
				<div class={styles.team}>
					<div className={styles.imgContainer}>
						<img className={styles.image} src={liverPool} alt='' />
					</div>
					<div className={styles.name}>Liverpool</div>
					<div className={styles.vote}>
						<div className={styles.votes}>{votes[3]}</div>
						<button
							className={styles.button}
							name='3'
							onClick={(e) => vote(e)}>
							Vote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Voting;
