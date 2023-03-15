import React from "react";

function Card({ data, err }) {
	if (err)
		return (
			<div className="card">
				{" "}
				<h4> {err} </h4>{" "}
			</div>
		);
	if (!data) return;
	// console.log(data);
	let { name, weather, sys, main } = data;
	const newLocal = `http://openweathermap.org/img/w/${weather[0].icon}.png`;
	return (
		<>
			<div className="card">
				<div className="card-top">
					{" "}
					<div className="city">
						<h4>
							{name}, {sys.country}
						</h4>{" "}
						<small> {weather[0].description} </small>
					</div>
					<div className="icon">
						{" "}
						<img src={newLocal} alt="icon" />{" "}
					</div>
				</div>
				<div className="card-bottom">
					{" "}
					<div className="temp">
						{" "}
						<h1>{Math.floor(main.temp)} &deg; C </h1>{" "}
					</div>
					<div className="description">
						<div>
							{" "}
							<p> Feels Like : </p> <p> {main.feels_like} &deg; C </p>{" "}
						</div>
						<div>
							{" "}
							<p> Humidity : </p> <p> {main.humidity} % </p>{" "}
						</div>
						<div>
							{" "}
							<p> Pressure : </p> <p> {main.pressure} hPs</p>{" "}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;
