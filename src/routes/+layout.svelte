<script lang='ts'>
    import { getGameTime } from "$lib";
	// The ordering of these imports is critical to your app working properly
	import './../styles/themes/dark.postcss';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';

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