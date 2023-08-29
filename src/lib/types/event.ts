import { isSameDay, timeToColor } from "$lib";
import ids from "../../data/calendar/idlist.json";
import { Calendar } from "./calendar";

export interface AkEventTyoe {
	start: string
	end: string
	id: string
	colors: string[] | null
}

export class AkEvent extends Calendar{
	private start: Date
	private end: Date
	private type: string
	private colors: string[]|null
	
	constructor(start:number, end:number, id:string, type:string, colors:string[]|null=null) {
		super(id)
		this.start = new Date(start*1000)
		this.end = new Date(end*1000)
		this.type = type
		this.colors = colors
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
	public getType():string {
		return this.type
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

	public getColors():string {
		return this.colors!=null ? this.colors.join(", ") : `${timeToColor(this.start)}, ${timeToColor(this.end)}`;
	}
}