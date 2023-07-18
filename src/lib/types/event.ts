import { isSameDay } from "$lib";
import ids from "../../data/calendar/ids.json";
import { Calendar } from "./calendar";

export interface AkEventTyoe {
	start: string
	end: string
	id: string
}

export class AkEvent extends Calendar{
	private start: Date
	private end: Date
	
	constructor(start:string, end:string, id:string) {
		super(id)
		this.start = new Date(start)
		this.end = new Date(end)
	}

	public getDisplayName():string {
		// @ts-ignore
		return ids[this.id];
	}
	public getStart():Date {
		return this.start
	}
	public getEnd():Date {
		return this.end
	}
	
	public isBeforeEvent(ref:Date):boolean {
		return ref.getTime() - this.start.getTime() <= 0;
	}
	public isAfterEvent(ref:Date):boolean {
		return ref.getTime() - this.end.getTime() >= 0;
	}
	public isWithinEvent(ref:Date):boolean {
		return (!this.isBeforeEvent(ref) && !this.isAfterEvent(ref)) || isSameDay(ref, this.start) || isSameDay(ref, this.end);
	}
}