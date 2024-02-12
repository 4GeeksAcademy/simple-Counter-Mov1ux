import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";
import Digit from "./Digit";
import Clock from "./Clock";
//create your first component
const Home = (props) => {
	const digitUno = props.seconds % 10;
	const digitDos = Math.floor(props.seconds /10) % 10;
	const digitTres = Math.floor(props.seconds /100) % 10;
	const digitCuatro = Math.floor(props.seconds /1000) % 10;
	const digitCinco = Math.floor(props.seconds /10000) % 10;
	const digitSeis = Math.floor(props.seconds /100000) % 10;
	return (
		<div className="text-center">
			<Clock/>
			<SecondsCounter seconds={props.seconds}/>
			<Digit number={digitUno}/>
			<Digit number={digitDos}/>
			<Digit number={digitTres}/>
			<Digit number={digitCuatro}/>
			<Digit number={digitCinco}/>
			<Digit number={digitSeis}/>
		</div>
	);
};

export default Home;
