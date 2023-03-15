import React, { useState } from "react";
import "./App.css";
import Card from "./component/Card";
import InputComp from "./component/InputComp";

function App() {
	const [data, setData] = useState("");
	const [err, setErr] = useState("");

	return (
		<div className="app">
			<InputComp setData={setData} setErr={setErr} />
			<Card data={data} err={err} />
		</div>
	);
}

export default App;
