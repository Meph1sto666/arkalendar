export function getDaysInMonth(date:Date):number {
	return new Date(date.getFullYear(),date.getMonth()+1, 0).getDate();
}

export function getGameTime():Date {
	let time = new Date()
	time.setUTCHours(time.getUTCHours()-7)
	return time
}

export function isSameDay(t1:Date, t2:Date) {
	return t1.getFullYear()===t2.getFullYear()&&t1.getMonth()===t2.getMonth()&&t1.getDate()===t2.getDate()
}

export function weeksBetween(t1:Date, t2:Date):number {
	let diffTime = Math.abs(t2.getTime() - t1.getTime());
	let diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return Math.floor(diffDays / 7);
}

export function weeksSinceMonthStart(date:Date) {
	let firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	let diffDays = (date.getTime() - firstDayOfMonth.getTime()) / (1000 * 60 * 60 * 24)
	diffDays+=(firstDayOfMonth.getDay()+1)
	return Math.ceil(diffDays/7)
}

export function timeToColor(date:Date):string {
	return "#"+date.getTime().toString(16).slice(2,8)
}