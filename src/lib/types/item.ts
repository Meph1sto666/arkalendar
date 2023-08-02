export interface Item {
	itemId: string
	name: string
	description: string|null
	rarity: number
	iconId: string
	overrideBkg: string|null
	stackIconId: string|null
	sortId: number
	usage: string|null
	obtainApproach: string|null
	classifyType: string
	itemType: string
	stageDropList: {
		stageId: string
		occPer: string
	}[]
	buildingProductList: {
		roomType:string
		formula?:string
	}[]
}