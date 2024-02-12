import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import SecondsCounter from "./SecondsCounter";
import Clock from "./Clock";
//create your first component
const Home = (props) => {
	
	return (
		<div className="text-center d-flex">
			<div className="bg-dark text-danger"><Clock/></div>
			<div className="bg-dark text-danger"><SecondsCounter seconds={props.seconds}/></div>
		</div>
	);
};

export default Home;
