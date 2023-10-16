from bs4 import BeautifulSoup as Bs
from urllib.parse import unquote
import xmltodict
import requests
import typing
import json
import re
import os

items:dict[str, list[str | int] | dict[str, list[str | int] | str]] = {
	"base": ["html","body","div",1,"main","section","div",0,"div",1,"div",1,"article","div"],
	"furnPath": {
		"path": ["div",0,"img","@src"],
		"name": "{itemId}{ext}",
		"dw_path": "./assets/furn/{filename}"
	}
}

def getContent(data:dict[str, typing.Any], k:str) -> typing.Any:
	path:list[str|int] = list(items["base"]) + items[k]["path"] # type: ignore
	dataSave: dict[str, typing.Any] = data
	try:
		for p in path: # type: ignore
			data = data[p] # type: ignore
	except:
		try:
			altPath:list[str|int] = items["base"] + items[k].get("alt_path") # type: ignore
			data = dataSave
			print(altPath) # type: ignore
			for p in altPath: # type: ignore
				data = data[p] # type: ignore
		except:
			raise
	return data

def makeURL(fName:str) -> str:
	fName = re.sub(r"[^\w\-_\s]", "", fName.lower())
	fName = re.sub(r"( - )| ", "-", fName.lower())
	return f"https://gamepress.gg/arknights/furniture/{fName}"

def getImgUrl(url:str) -> str:
	content:dict[str, typing.Any] = xmltodict.parse(re.sub(r"<script(\w|\W)*?>(\w|\W)*?</(no)?script>","",Bs(requests.get(url).text,"lxml").__str__()))
	json.dump(content, open("./furn_dmp.json", "w", encoding="utf-8"), indent=4)
	return "https://gamepress.gg" + getContent(content, "furnPath")

furnitures:dict[str, dict[str, str]] = json.load(open("../src/data/tables/building_data.json"))["customData"]["furnitures"]
i = 0
for f in list(furnitures.values()):
	name:str = f["name"]
	id:str = f["id"]
	i+=1
	if os.path.exists(f"./assets/furn/{id}.png"): continue
	try:
		imgUrl = getImgUrl(makeURL(name))
		print(i,len(furnitures), end="\r")
		open(items["furnPath"]["dw_path"].format(filename=f"{id}.png"), "wb").write(requests.get(imgUrl).content)
	except:
		print(name, id)