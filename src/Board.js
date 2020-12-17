import React, { useState } from 'react';
import './index.css';
import Button from './Button';
export default function Board(props) {
	let { player, setPlayer, boardState, setBoardState, setWinner, winner, setHistory, history2 } = props;
	console.log(props);

	function handleClick(event) {
		// console.log(event.target.value);
		if (!winner) {
			if (player === 'player1') {
				if (checkTile(event.target.value)) {
					setHistory([ ...history2, boardState ]);
					setBoardState({ ...boardState, [event.target.value]: 'X' });
					checkWinner(boardState);
					setPlayer('player2');
				}
			} else {
				if (checkTile(event.target.value)) {
					setHistory([ ...history2, boardState ]);
					setBoardState({ ...boardState, [event.target.value]: 'O' });
					checkWinner(boardState);
					setPlayer('player1');
				}
			}
		}
		console.log(history2);
	}

	function checkTile(tile) {
		if (boardState[tile] !== 'X' && boardState[tile] !== 'O') {
			return true;
		} else {
			return false;
		}
	}
	function checkWinner(boardState) {
		if (boardState[1] === 'X' && boardState[2] === 'X' && boardState[3] === 'X') {
			setWinner(true);
			setPlayer('');
		}
	}

	return (
		<div className="tic-board">
			<Button handleClick={handleClick} value="1">
				{boardState[1]}
			</Button>
			<Button handleClick={handleClick} value="2">
				{boardState[2]}
			</Button>
			<Button handleClick={handleClick} value="3">
				{boardState[3]}
			</Button>
			<Button handleClick={handleClick} value="4">
				{boardState[4]}
			</Button>
			<Button handleClick={handleClick} value="5">
				{boardState[5]}
			</Button>
			<Button handleClick={handleClick} value="6">
				{boardState[6]}
			</Button>
			<Button handleClick={handleClick} value="7">
				{boardState[7]}
			</Button>
			<Button handleClick={handleClick} value="8">
				{boardState[8]}
			</Button>
			<Button handleClick={handleClick} value="9">
				{boardState[9]}
			</Button>
		</div>
	);
}
