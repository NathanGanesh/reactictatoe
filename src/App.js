import React, { useState } from 'react';
import Board from './Board';

export default function App() {
	const [ player, setPlayer ] = useState('player2');

	function setPlayer2(name) {
		setPlayer(name);
	}
	const [ boardState, setBoardState ] = useState({
		1: '',
		2: '',
		3: '',
		4: '',
		5: '',
		6: '',
		7: '',
		8: '',
		9: ''
	});

	const [ winner, setWinner ] = useState(false);

	const [ history2, setHistory ] = useState([]);

	function resetBoard() {
		setBoardState({});
		setPlayer('player1');
		setWinner(false);
		setHistory([]);
	}
	function handleBoardHistory(event) {
		// setBoardState(boardState[event.target.value]);
		console.log(boardState[event.target.value]);
		console.log(event.target.value);
	}

	return (
		<div className="main-div">
			<h1>TIC TAC TOE</h1>
			<h2>Next player is {player}</h2>
			<h2>{winner && <p>The winner is {player}</p>}</h2>
			<Board
				player={player}
				boardState={boardState}
				setBoardState={setBoardState}
				setPlayer={setPlayer2}
				setWinner={setWinner}
				winner={winner}
				history2={history2}
				setHistory={setHistory}
			/>
			<button onClick={() => resetBoard()}>Start new game</button>
			{history2.map((historyItem, index) => {
				return (
					<li onClick={(event) => handleBoardHistory(event)} value={index}>
						go to move # {index}
					</li>
				);
			})}
			{/* {console.log(history2)} */}
			{/* <div>{history2}</div> */}
		</div>
	);
}
