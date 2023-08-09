from bs4 import BeautifulSoup as Bs
from urllib.parse import unquote
import xmltodict
import requests
import typing
import json
import re
import os
URL:str = input("URL> ")

items:dict[str,dict[str, list[str|int]|str|dict[str,str]] | list[str|int]] = {
	"base": ["html","body","div",1,"main","section","div",0,"div",1,"div",1,"article","div",1,"div"],
	"eventTokenUrlPath": {
		"path": [1,"span","div",1,"div",0,"table","tr","td",1,"div","div",1,"a","img","@src"],
		"lookup": {
			"lang": "zh_CN",
			"file": "item_table.json"
		},
		"name": "{itemId}{ext}",
		"dw_path": "assets/items/{filename}"
	},
	"eventBannerUrlPath": {
    	"path": [7,"span","div",1,"div",0,"div",0,"img","@src"],
    	"alt_path": [6,"span","div",1,"div",0,"div",0,"img","@src"],
		"name": "{og}",
		"dw_path": "assets/banners/{filename}"
    },
	"eventHhBannerUrlPath": {
    	"path": [9,"span","div",1,"div",0,"div",0,"img","@src"],
    	"alt_path": [8,"span","div",1,"div",0,"div",0,"img","@src"],
		"name": "{og}",
		"dw_path": "assets/banners/{filename}"
    }
}

def getContent(data:dict[str, typing.Any], k:str) -> typing.Any:
	path:list[str|int] = list(items["base"]) + items[k]["path"]
	dataSave = data
	try:
		for p in path:
			data = data[p] # type: ignore
	except:
		try:
			altPath:list[str|int] = items["base"] + items[k].get("alt_path")
			data = dataSave
			print(altPath)
			for p in altPath:
				data = data[p] # type: ignore
		except:
			raise
			return None			
	return data

def normalizeUrl(url:str) -> str:
	return unquote("https://gamepress.gg" + re.sub(r"(styles/(\d+x\d+)/public/)|(\?[\w\W]+)", "", url))

def lookup(val:str, lang:str="zh_CN", file:str="item_table.json") -> dict[str, typing.Any]|None:
	data:dict[str,dict[str,dict[str,typing.Any]]] = json.load(open(f"../src/data/ArknightsGameData/{lang}/gamedata/excel/{file}", "r", encoding="utf-8"))
	for i in data.items():
		try:
			filtered: tuple[str, dict[str, typing.Any]] = list(filter(lambda x: any([val in i for i in x[1].items()]), i[1].items()))[0]
			return filtered[1]
		except:
			pass
		
content:dict[str, typing.Any] = xmltodict.parse(re.sub(r"<script(\w|\W)*?>(\w|\W)*?</(no)?script>","",Bs(requests.get(URL).text,"lxml").__str__()))

json.dump(content, open("./event_dmp.json", "w", encoding="utf-8"), indent=4)

content = json.load(open("./event_dmp.json"))

for i in items.items():
	if i[0] == "base": continue
	subContent = getContent(content, i[0])
	print(subContent)
	itemUrl: str = normalizeUrl(subContent)
	ext: str=os.path.splitext(itemUrl)[1]
	og: str=os.path.split(itemUrl)[1]
	if i[1].get("lookup") != None:
		lookupResults:typing.Any|None = lookup(**i[1]["lookup"], val=os.path.splitext(os.path.split(itemUrl)[1])[0].split("_")[-1])
		filename:str = i[1]["name"].format(**lookupResults, og=og, ext=ext)
	else:
		filename:str=i[1]["name"].format(og=og, ext=ext)
	open(i[1]['dw_path'].format(filename=filename), "wb").write(requests.get(itemUrl).content)
