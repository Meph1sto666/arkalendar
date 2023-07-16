<script>
    import { getGameTime } from "$lib";

	let time = getGameTime()
	function updateTime() {
		time = getGameTime()
	}
	const interval = setInterval(updateTime, 1000);
</script>
<nav>
	<div id="nav-back" />
	<div id="nav-home" />
	<div id="en-game-time-clock">
		//{time.getFullYear().toString().padStart(4,"0")}/{time.getMonth().toString().padStart(2,"0")}-{time.getDate().toString().padStart(2,"0")
	}////{time.getHours().toString().padStart(2,"0")}-{time.getMinutes().toString().padStart(2,"0")}-{time.getSeconds().toString().padStart(2,"0")}//
	<div>
</nav>
<slot></slot>