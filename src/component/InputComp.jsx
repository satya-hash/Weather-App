import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";
import axios from "axios";

function InputComp({ setData, setErr }) {
	const [city, setCity] = useState("");
	function handleSubmit(e) {
		e.preventDefault();
		if (!city) {
			setData("");
			setErr("Not Found");
			return;
		}
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
			import.meta.env.VITE_WEATHER_API_KEY
		}&units=metric`;

		axios
			.get(url)
			.then((res) => {
				setData(res.data);
				setErr("");
			})
			.catch((e) => {
				setErr("Not Found");
			});
	}

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder="Enter City"
					value={city}
					onChange={(e) => {
						setCity(e.target.value);
					}}
				/>
				<button type="submit">
					{" "}
					<UilSearch />{" "}
				</button>
			</form>
		</>
	);
}

export default InputComp;
