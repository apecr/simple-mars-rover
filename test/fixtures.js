module.exports = {
	useCases: [
		{
			name: "Should rotate right the rover twice",
			move: "RR",
			position: "0:0:S",
		},
		{
			name: "Should rotate left the rover twice",
			move: "LL",
			position: "0:0:S",
		},
		{
			name: "Should rotate right the rover three times",
			move: "RRR",
			position: "0:0:W",
		},
		{
			name: "Should rotate left the rover three times",
			move: "LLL",
			position: "0:0:E",
		},
		{
			name: "Should rotate right the rover four times",
			move: "RRRR",
			position: "0:0:N",
		},
		{
			name: "Should rotate left the rover four times",
			move: "LLLL",
			position: "0:0:N",
		},
		{
			name: "Should rotate right the rover seven times",
			move: "RRRRRRR",
			position: "0:0:W",
		},
		{
			name: "Should rotate left the rover six times",
			move: "LLLLLL",
			position: "0:0:S",
		},
		{
			name: "Move one forward, one left",
			move: "ML",
			position: "0:1:W",
		},
    {
			name: "Move one forward, one right",
			move: "MR",
			position: "0:1:E",
		},
    {
			name: "Move one forward, one right, one forward",
			move: "MRM",
			position: "1:1:E",
		},
    {
			name: "Move one forward, two right, one forward",
			move: "MRRM",
			position: "0:0:S",
		},
    {
			name: "Move one forward, two right, two forward",
			move: "MRRMM",
			position: "0:9:S",
		},
    {
			name: "Move one forward, two right, three forward",
			move: "MRRMMM",
			position: "0:8:S",
		},
    {
			name: "Move to the rigth until start again",
			move: "RMMMMMMMMMM",
			position: "0:0:E",
		},
    {
			name: "Move to the rigth from row 2 until start again",
			move: "MMRMMMMMMMMMM",
			position: "0:2:E",
		},
	],
};
