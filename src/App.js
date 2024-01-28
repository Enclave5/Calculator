import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('');
	const [operand2, setOperand2] = useState('');
	const [operator, setOperator] = useState('');
	const [isResult, setIsResult] = useState(false);
	// const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const NUMS2 = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0'];

	const nums = NUMS2.map((num, index) => {
		return (
			<button
				className={styles.button}
				onClick={(event) => {
					const { target } = event;

					if (operator === '') {
						setOperand1(operand1 + target.textContent);
					}

					if (operator !== '') {
						setOperand2(operand2 + target.textContent);
					}
				}}
			>
				{num}
			</button>
		);
	});

	return (
		<>
			<header className={styles.header}>
				<div className={styles.container}>
					<div
						className={`${styles.table} ${isResult ? styles.display : styles.table}`}
					>
						{operand1 + ' ' + operator + ' ' + operand2}
					</div>
					<div className={styles.numberButtons}>
						{nums}
						<button
							className={styles.buttonPlus}
							onClick={(event) => {
								setOperator('+');
								setIsResult(false);
							}}
						>
							+
						</button>
						<button
							className={styles.buttonMinus}
							onClick={(event) => {
								setOperator('-');
								setIsResult(false);
							}}
						>
							-
						</button>
						<button
							className={styles.buttonEquals}
							onClick={(event) => {
								if (event.target) {
									setIsResult(true);
								}
								if (operand2 !== '') {
									if (operator === '+') {
										const result =
											Number(operand1) + Number(operand2);
										setOperand2('');
										setOperator('');
										return setOperand1(result);
									} else {
										const result =
											Number(operand1) - Number(operand2);
										setOperand2('');
										setOperator('');
										return setOperand1(result);
									}
								}
							}}
						>
							=
						</button>
						<button
							className={styles.buttonClear}
							onClick={(event) => {
								setIsResult(false);
								setOperand1('');
								setOperand2('');
								setOperator('');
							}}
						>
							C
						</button>
					</div>
				</div>
			</header>
		</>
	);
};
