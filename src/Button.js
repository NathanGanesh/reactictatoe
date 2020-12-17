import React from 'react';

export default function Button(props) {
	const { value, handleClick } = props;
	// console.log(props);
	return (
		<button onClick={handleClick} value={value}>
			{props.children}
		</button>
	);
}
