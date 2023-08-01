export async function load({ params }) {
	const eventId = params.eid;
	console.log(eventId);
	
	return {
		id: eventId,
		eventData: await import(`../../../../data/events/${eventId}.json`)
	}
}