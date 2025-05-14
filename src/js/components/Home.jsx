import React, { useState } from "react";
import SecondsCounter from "./SecondsCounter.jsx";


const Home = () => {

	const [segundos, setSegundos] = useState(0)


	setInterval(() => {
		setSegundos(segundos + 1)
	}, 1000);


	return (
		<div className="text-center">

			<SecondsCounter segundos={segundos}></SecondsCounter>
			<i class="fa-solid fa-watch"></i>
			<p className="footing">


			</p>
		</div>
	);
};

export default Home;
