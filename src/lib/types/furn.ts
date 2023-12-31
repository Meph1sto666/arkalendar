export interface Furn {
	id: string,
	sortId: number,
	name: string,
	iconId: string,
	type: string,
	subType: string,
	location: string,
	category: string,
	validOnRotate: boolean,
	enableRotate: boolean,
	rarity: number,
	themeId: string,
	groupId: string,
	width: number,
	depth: number,
	height: number,
	comfort: number,
	usage: string,
	description: string,
	obtainApproach: string,
	processedProductId: string,
	processedProductCount: number,
	processedByProductPercentage: number,
	processedByProductGroup: string[],
	canBeDestroy: boolean,
	isOnly: number,
	quantity: number
}