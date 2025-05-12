import React from "react";


//include images into your bundle

import SimpleCounter from "./SimpleCounter";
import './index.css';

//create your first component
const Home = () => {


	return (
		<div>

			<h1>Contador Simple</h1>
			<SimpleCounter />

		</div>

	);
};

export default Home;
ReactDOM.render(<Home />, document.querySelector('#app'))