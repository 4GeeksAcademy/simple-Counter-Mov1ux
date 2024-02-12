import React from "react";
import Digit from "./Digit";
const SecondsCounter = (props) => {
	const digitUno = props.seconds % 10;
	const digitDos = Math.floor(props.seconds /10) % 10;
	const digitTres = Math.floor(props.seconds /100) % 10;
	const digitCuatro = Math.floor(props.seconds /1000) % 10;
	const digitCinco = Math.floor(props.seconds /10000) % 10;
	const digitSeis = Math.floor(props.seconds /100000) % 10;
	return (
		<div className="text-center d-flex">
			
			<h1><Digit number={digitSeis}/></h1>
			<h1><Digit number={digitCinco}/></h1>
			<h1><Digit number={digitCuatro}/></h1>
			<h1><Digit number={digitTres}/></h1>
			<h1><Digit number={digitDos}/></h1>
			<h1><Digit number={digitUno}/></h1>
		</div>
	);
};
export default SecondsCounter