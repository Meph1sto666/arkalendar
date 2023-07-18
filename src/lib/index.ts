export function getDaysInMonth(date:Date):number {
	return new Date(date.getFullYear(),date.getMonth()+1, 0).getDate();
}

export function getGameTime():Date {
	let time = new Date()
	time.setUTCHours(time.getUTCHours()-(7-(time.getTimezoneOffset()/60)))
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

export function isInSameWeek(d1:Date,d2:Date):boolean {
	// let days = ((Math.round((d2.getTime() - d1.getTime()) / (24 * 60 * 60 * 1000)) - (d1.getDay() + 6) % 7 - (d2.getDay() + 6) % 7) / 7)
	// console.log(days, d1,d2);
	
	// return days<=0;
	let fdow = new Date(d1.getFullYear(),d1.getMonth(),d1.getDate()-d1.getDay())
	let ldow = new Date(d1.getFullYear(),d1.getMonth(),fdow.getDate()+7)
	return d2.getTime() >= fdow.getTime() && d2.getTime() < ldow.getTime()
}