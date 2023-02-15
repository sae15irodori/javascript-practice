const play = async() = > {
	const player = new Tone.Player().toDestination();
	player.load(”path”);
	await Tone.loaded();
	player.start();
}

const play = () = > {
	const　osc = new Tone.Oscillator(440, "sine").toDestination().start();
}