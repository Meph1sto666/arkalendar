export abstract class Calendar {
	private id: string;

	constructor(id:string) {
		this.id = id;
	}

	public getId():string {
		return this.id;
	}

	public isBeforeEvent(ref:Date, event:Date):boolean {
		return ref.getTime()-event.getTime()>=0;
	}
	public isAfterEvent(ref:Date, event:Date):boolean {
		return ref.getTime()-event.getTime()<=0;
	}
	public isWithinEvent(refStart:Date, refEnd:Date, event:Date) {
		return this.isAfterEvent(refStart, event) && this.isBeforeEvent(refStart, event);
	}
}