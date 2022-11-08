const getRover = () => {
	let position = "0:0:N";
	return {
		move: (command) => {
			const movements = command.split("");
			for (movement in movements) {
				position = calculateNewPosition(position, movements[movement]);
			}
		},
		getPosition: () => position,
	};
};

const calculateNewPosition = (initialPosition, command) => {
	if (command === "L") {
		return turnLeft(initialPosition);
	}
	if (command === "R") {
		return turnRight(initialPosition);
	}
	if (command === "M") {
		return moveForward(initialPosition);
	}
};

const turnLeft = (position) => {
	const positionElements = calculateParametersFromPosition(position);
	const coordinateNew = {
		N: "W",
		W: "S",
		S: "E",
		E: "N",
	};
	return `${positionElements.xValue}:${positionElements.yValue}:${
		coordinateNew[positionElements.coordinate]
	}`;
};

const turnRight = (position) => {
	const positionElements = calculateParametersFromPosition(position);
	const coordinateNew = {
		N: "E",
		E: "S",
		S: "W",
		W: "N",
	};
	return `${positionElements.xValue}:${positionElements.yValue}:${
		coordinateNew[positionElements.coordinate]
	}`;
};

const moveForward = (position) => {
	const positionElements = calculateParametersFromPosition(position);
	
	if (positionElements.coordinate === "E") {
    if (positionElements.xValue === 9) {
      return `0:${positionElements.yValue}:${positionElements.coordinate}`;
    }
		return `${positionElements.xValue + 1}:${positionElements.yValue}:${
			positionElements.coordinate
		}`;
	}
	if (positionElements.coordinate === "S") {
    if (positionElements.yValue === 0){
      return `${positionElements.xValue}:9:${
        positionElements.coordinate
      }`;
    }
		return `${positionElements.xValue}:${positionElements.yValue - 1}:${
			positionElements.coordinate
		}`;
	}
  if (positionElements.yValue === 9) {
		return `${positionElements.xValue}:0:${positionElements.coordinate}`;
	}
	return `${positionElements.xValue}:${positionElements.yValue + 1}:${
		positionElements.coordinate
	}`;
};

const calculateParametersFromPosition = (position) => ({
	xValue: parseInt(position[0]),
	yValue: parseInt(position[2]),
	coordinate: position[4],
});

module.exports = {
	getRover,
};
