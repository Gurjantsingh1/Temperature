import React, { useState } from 'react';
const Temperature = () => {
	const [temperatureValue, setTemperatureValue] = useState(10);
	
    const [temp, setTemp] = useState("C")
	function convertTemperature(){
		if (temp === "F"){
			setTemperatureValue(temperatureValue+32)
			setTemp("C")
		}
		if (temp === "C"){
			setTemperatureValue(temperatureValue-32)
			setTemp("F")
		}
	}

	const increaseTemperature = () => {
		const newTemperature = temperatureValue + 1;
		setTemperatureValue(newTemperature);

		
	};
	const decreaseTemperature = () => {
		const newTemperature = temperatureValue - 1;
		setTemperatureValue(newTemperature);
		
	
	};
	return (
		<div className='temp-container'>
			<div className='temperature-display-container'>
				<div className={`temperature-display`}>{temperatureValue}</div>
			</div>
			<div className='button-container'>
                <button onClick={decreaseTemperature}>-</button>
				<button onClick={increaseTemperature}>+</button>
				<button onClick={convertTemperature}>Convert</button>
				
			</div>
            <div></div>
		</div>
	);
};
export default Temperature;