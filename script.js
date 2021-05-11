class Meal{
	constructor(name, category, diet, value, metric, calory, weight, 
		ing1, ing2, ing3, ing4, ing5, all1, all2, all3, all4, all5, pic){
			this.name = name;
			this.category = category;
			this.diet = diet;
			this.value = value;
			this.metric = metric;
			this.calory = calory;
			this.weight = weight;
			this.ing1 = ing1;
			this.ing2 = ing2;
			this.ing3 = ing3;
			this.ing4 = ing4;
			this.ing5 = ing5;
			this.all1 = all1;
			this.all2 = all2;
			this.all3 = all3;
			this.all4 = all4;
			this.all5 = all5;
			this.pic = pic;
		}
}

let mealsObjects = [];
let mealsxml;

function xmlLoader() {
	let url = "receptek.xml";
                fetch(url)
                .then(response=>response.text())
                .then(data=>{
//                    console.log(data);
                    let parser = new DOMParser();
                    let xml = parser.parseFromString(data, "application/xml");
//                    document.getElementById('output').textContent = data;
//                    console.log(xml);
					mealsxml = xml.getElementsByTagName('ETEL');
					console.log(mealsxml);
					objBuilder(mealsxml);
					
					buildMealList();
                });
				
}

function createMenu(){
	let mealH1 = parseObj(document.getElementById("selectMealsH1").value);
//	console.log(mealH1);
	let mealH2 = parseObj(document.getElementById("selectMealsH2").value);
	let mealH3 = parseObj(document.getElementById("selectMealsH3").value);
	let mealK1 = parseObj(document.getElementById("selectMealsK1").value);
	let mealK2 = parseObj(document.getElementById("selectMealsK2").value);
	let mealK3 = parseObj(document.getElementById("selectMealsK3").value); 
	let mealS1 = parseObj(document.getElementById("selectMealsS1").value);
	let mealS2 = parseObj(document.getElementById("selectMealsS2").value);
	let mealS3 = parseObj(document.getElementById("selectMealsS3").value); 
	let mealC1 = parseObj(document.getElementById("selectMealsC1").value);
	let mealC2 = parseObj(document.getElementById("selectMealsC2").value);
	let mealC3 = parseObj(document.getElementById("selectMealsC3").value); 
	let mealP1 = parseObj(document.getElementById("selectMealsP1").value);
	let mealP2 = parseObj(document.getElementById("selectMealsP2").value);
	let mealP3 = parseObj(document.getElementById("selectMealsP3").value); 

	if(mealH1 != null){
	document.getElementById("H1card").style.backgroundImage = "url(" + mealH1.pic + ")";
	document.getElementById("H1card").addEventListener("click", function(){popUpWindow(mealH1)},false);
	document.getElementById("H1name").innerHTML = mealH1.name;
	document.getElementById("H1metric").innerHTML = mealH1.value + " " + mealH1.metric;
	document.getElementById("H1calory").innerHTML = mealH1.calory + " Kcal";
	}

	if(mealH2 != null){
	document.getElementById("H2card").style.backgroundImage = "url(" + mealH2.pic + ")";
	document.getElementById("H2card").addEventListener("click", function(){popUpWindow(mealH2)},false);
	document.getElementById("H2name").innerHTML = mealH2.name;
	document.getElementById("H2metric").innerHTML = mealH2.value + " " + mealH2.metric;
	document.getElementById("H2calory").innerHTML = mealH2.calory + " Kcal";
	}

	if(mealH3 != null){
	document.getElementById("H3card").style.backgroundImage = "url(" + mealH3.pic + ")";
	document.getElementById("H3card").addEventListener("click", function(){popUpWindow(mealH3)},false);
	document.getElementById("H3name").innerHTML = mealH3.name;
	document.getElementById("H3metric").innerHTML = mealH3.value + " " + mealH3.metric;
	document.getElementById("H3calory").innerHTML = mealH3.calory + " Kcal";
	}

	if(mealK1 != null){
	document.getElementById("K1card").style.backgroundImage = "url(" + mealK1.pic + ")";
	document.getElementById("K1card").addEventListener("click", function(){popUpWindow(mealK1)},false);
	document.getElementById("K1name").innerHTML = mealK1.name;
	document.getElementById("K1metric").innerHTML = mealK1.value + " " + mealK1.metric;
	document.getElementById("K1calory").innerHTML = mealK1.calory + " Kcal";
	}

	if(mealK2 != null){
	document.getElementById("K2card").style.backgroundImage = "url(" + mealK2.pic + ")";
	document.getElementById("K2card").addEventListener("click", function(){popUpWindow(mealK2)},false);
	document.getElementById("K2name").innerHTML = mealK2.name;
	document.getElementById("K2metric").innerHTML = mealK2.value + " " + mealK2.metric;
	document.getElementById("K2calory").innerHTML = mealK2.calory + " Kcal";
	}

	if(mealK3 != null){
	document.getElementById("K3card").style.backgroundImage = "url(" + mealK3.pic + ")";
	document.getElementById("K3card").addEventListener("click", function(){popUpWindow(mealK3)},false);
	document.getElementById("K3name").innerHTML = mealK3.name;
	document.getElementById("K3metric").innerHTML = mealK3.value + " " + mealK3.metric;
	document.getElementById("K3calory").innerHTML = mealK3.calory + " Kcal";
	}

	if(mealS1 != null){
	document.getElementById("S1card").style.backgroundImage = "url(" + mealS1.pic + ")";
	document.getElementById("S1card").addEventListener("click", function(){popUpWindow(mealS1)},false);
	document.getElementById("S1name").innerHTML = mealS1.name;
	document.getElementById("S1metric").innerHTML = mealS1.value + " " + mealS1.metric;
	document.getElementById("S1calory").innerHTML = mealS1.calory + " Kcal";
}

if(mealS2 != null){
	document.getElementById("S2card").style.backgroundImage = "url(" + mealS2.pic + ")";
	document.getElementById("S2card").addEventListener("click", function(){popUpWindow(mealS2)},false);
	document.getElementById("S2name").innerHTML = mealS2.name;
	document.getElementById("S2metric").innerHTML = mealS2.value + " " + mealS2.metric;
	document.getElementById("S2calory").innerHTML = mealS2.calory + " Kcal";
}

if(mealS3 != null){
	document.getElementById("S3card").style.backgroundImage = "url(" + mealS3.pic + ")";
	document.getElementById("S3card").addEventListener("click", function(){popUpWindow(mealS3)},false);
	document.getElementById("S3name").innerHTML = mealS3.name;
	document.getElementById("S3metric").innerHTML = mealS3.value + " " + mealS3.metric;
	document.getElementById("S3calory").innerHTML = mealS3.calory + " Kcal";
}

if(mealC1 != null){
	document.getElementById("C1card").style.backgroundImage = "url(" + mealC1.pic + ")";
	document.getElementById("C1card").addEventListener("click", function(){popUpWindow(mealC1)},false);
	document.getElementById("C1name").innerHTML = mealC1.name;
	document.getElementById("C1metric").innerHTML = mealC1.value + " " + mealC1.metric;
	document.getElementById("C1calory").innerHTML = mealC1.calory + " Kcal";
}

if(mealC2 != null){
	document.getElementById("C2card").style.backgroundImage = "url(" + mealC2.pic + ")";
	document.getElementById("C2card").addEventListener("click", function(){popUpWindow(mealC2)},false);
	document.getElementById("C2name").innerHTML = mealC2.name;
	document.getElementById("C2metric").innerHTML = mealC2.value + " " + mealC2.metric;
	document.getElementById("C2calory").innerHTML = mealC2.calory + " Kcal";
}

if(mealC3 != null){
	document.getElementById("C3card").style.backgroundImage = "url(" + mealC3.pic + ")";
	document.getElementById("C3card").addEventListener("click", function(){popUpWindow(mealC3)},false);
	document.getElementById("C3name").innerHTML = mealC3.name;
	document.getElementById("C3metric").innerHTML = mealC3.value + " " + mealC3.metric;
	document.getElementById("C3calory").innerHTML = mealC3.calory + " Kcal";
}

if(mealP1 != null){
	document.getElementById("P1card").style.backgroundImage = "url(" + mealP1.pic + ")";
	document.getElementById("P1card").addEventListener("click", function(){popUpWindow(mealP1)},false);
	document.getElementById("P1name").innerHTML = mealP1.name;
	document.getElementById("P1metric").innerHTML = mealP1.value + " " + mealP1.metric;
	document.getElementById("P1calory").innerHTML = mealP1.calory + " Kcal";
}

if(mealP2 != null){
	document.getElementById("P2card").style.backgroundImage = "url(" + mealP2.pic + ")";
	document.getElementById("P2card").addEventListener("click", function(){popUpWindow(mealP2)},false);
	document.getElementById("P2name").innerHTML = mealP2.name;
	document.getElementById("P2metric").innerHTML = mealP2.value + " " + mealP2.metric;
	document.getElementById("P2calory").innerHTML = mealP2.calory + " Kcal";
}

if(mealP3 != null){
	document.getElementById("P3card").style.backgroundImage = "url(" + mealP3.pic + ")";
	document.getElementById("P3card").addEventListener("click", function(){popUpWindow(mealP3)},false);
	document.getElementById("P3name").innerHTML = mealP3.name;
	document.getElementById("P3metric").innerHTML = mealP3.value + " " + mealP3.metric;
	document.getElementById("P3calory").innerHTML = mealP3.calory + " Kcal";
	}

	document.getElementById("firstPage").style.display='none';
	document.getElementById("secondPage").style.display='block';
}

function popUpWindow(meal){
	allerstring = "";
	if(meal.all1 != "nincs"){
		allerstring += meal.all1 + ", ";
		if(meal.all2 != "nincs"){
			allerstring += meal.all2 + ", ";
			if(meal.all3 != "nincs"){
				allerstring += meal.all3 + ", ";
				if(meal.all4 != "nincs"){
					allerstring += meal.all4 + ", ";
					if(meal.all5 != "nincs"){
						allerstring += meal.all5 + ", ";
					}
				}
			}
		}
	}else{
		allerstring += "nincs";
	}
	mealstring = "Etel: " + meal.name + "\n"
	+ "Kategoria: " + meal.category + "\n"
	+ "Dieta: " + meal.diet + "\n"
	+ "Mennyiseg/adag: " + meal.value + meal.metric + "\n"
	+ "Kaloria: " + meal.calory + "Kcal\n"
	+ "Nehezseg: " + meal.weight + "\n"
	+ "Osszetevok: " + meal.ing1 + ", " + meal.ing2 + ", " + meal.ing3 + ", " + meal.ing4 + ", " + meal.ing5 + "\n"
	+ "Allergenek: " + allerstring
	alert(mealstring)
}

function parseObj(objName){
	for (let index = 0; index < mealsObjects.length; index++) {
		if( objName === mealsObjects[index].name) return mealsObjects[index];
		
	}
	return null;
}

function objBuilder(meals){
	for (let index = 0; index < meals.length; index++) {
		let meal = meals[index];
		let name = meal.getElementsByTagName('MEGNEVEZES');
		let category = meal.getElementsByTagName('KATEGORIA'); 
		let diet = meal.getElementsByTagName('DIETATIPUS');
		let value = meal.getElementsByTagName('EGYADAGMENNYISEG'); 
		let metric = meal.getElementsByTagName('EGYADAGMENNYISEGMERTEKE'); 
		let calory = meal.getElementsByTagName('KALORIA'); 
		let weight = meal.getElementsByTagName('NEHEZSEG'); 
		let ing1 = meal.getElementsByTagName('ALAPANYAG1');
		let ing2 = meal.getElementsByTagName('ALAPANYAG2'); 
		let ing3 = meal.getElementsByTagName('ALAPANYAG3'); 
		let ing4 = meal.getElementsByTagName('ALAPANYAG4'); 
		let ing5 = meal.getElementsByTagName('ALAPANYAG5'); 
		let all1 = meal.getElementsByTagName('ALLERGEN1'); 
		let all2 = meal.getElementsByTagName('ALLERGEN2'); 
		let all3 = meal.getElementsByTagName('ALLERGEN3'); 
		let all4 = meal.getElementsByTagName('ALLERGEN4'); 
		let all5 = meal.getElementsByTagName('ALLERGEN5'); 
		let pic = meal.getElementsByTagName('KEP');
		let mealObj = new Meal(name[0].firstChild.nodeValue, 
			category[0].firstChild.nodeValue, 
			diet[0].firstChild.nodeValue, 
			value[0].firstChild.nodeValue, 
			metric[0].firstChild.nodeValue, 
			calory[0].firstChild.nodeValue, 
			weight[0].firstChild.nodeValue, 
			ing1[0].firstChild.nodeValue, 
			ing2[0].firstChild.nodeValue, 
			ing3[0].firstChild.nodeValue, 
			ing4[0].firstChild.nodeValue, 
			ing5[0].firstChild.nodeValue, 
			all1[0].firstChild.nodeValue, 
			all2[0].firstChild.nodeValue, 
			all3[0].firstChild.nodeValue, 
			all4[0].firstChild.nodeValue, 
			all5[0].firstChild.nodeValue, 
			pic[0].firstChild.nodeValue);
		mealsObjects.push(mealObj);
//						console.log(mealsObjects[index]);
	}
	
}


function buildMealList(){
//	let list = document.getElementById('meals');
//	let meals = xml.getElementsByTagName('MEGNEVEZES');
	let selectH1 = document.getElementById("selectMealsH1");
	let selectH2 = document.getElementById("selectMealsH2");
	let selectH3 = document.getElementById("selectMealsH3");
	let selectK1 = document.getElementById("selectMealsK1");
	let selectK2 = document.getElementById("selectMealsK2");
	let selectK3 = document.getElementById("selectMealsK3"); 
	let selectS1 = document.getElementById("selectMealsS1");
	let selectS2 = document.getElementById("selectMealsS2");
	let selectS3 = document.getElementById("selectMealsS3"); 
	let selectC1 = document.getElementById("selectMealsC1");
	let selectC2 = document.getElementById("selectMealsC2");
	let selectC3 = document.getElementById("selectMealsC3"); 
	let selectP1 = document.getElementById("selectMealsP1");
	let selectP2 = document.getElementById("selectMealsP2");
	let selectP3 = document.getElementById("selectMealsP3"); 
	dropDownBuilder(selectH1);
	dropDownBuilder(selectH2);
	dropDownBuilder(selectH3);
	dropDownBuilder(selectK1);
	dropDownBuilder(selectK2);
	dropDownBuilder(selectK3);
	dropDownBuilder(selectS1);
	dropDownBuilder(selectS2);
	dropDownBuilder(selectS3);
	dropDownBuilder(selectC1);
	dropDownBuilder(selectC2);
	dropDownBuilder(selectC3);
	dropDownBuilder(selectP1);
	dropDownBuilder(selectP2);
	dropDownBuilder(selectP3);
		

}

function dropDownBuilder(selecter){
	for (let index = 0; index < mealsObjects.length; index++) {
				let meal = mealsObjects[index].name;
				
				let el = document.createElement("option");
				el.textContent = meal;
				el.value = meal;
				selecter.appendChild(el);
	}
}

function exportHTML(){
	var header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' "
	+"xmlns:w='urn:schemas-microsoft-com:office:word' "
	+"xmlns='http://www.w3.org/TR/REC-html40'>"
	+"<head><meta charset='utf-8'><title>Heti menü</title><style> tr { page-break-inside:avoid; page-break-after:auto } .nopagebreak{page-break-inside: avoid;} table, td, th {padding:2px; border: 1px solid black; border-collapse: collapse; font-size:10px; page-break-inside:auto;}</style></head><body>";
	var footer = "</body></html>";
	var sourceHTML = header+document.getElementById("menu").innerHTML+footer;
	var source = 'data:application/vnd.ms-word;charset=utf-8,' 
	+ encodeURIComponent(sourceHTML);var fileDownload = document.createElement("a");
	document.body.appendChild(fileDownload);
	fileDownload.href = source;
	fileDownload.download = 'heti_menu.doc';
	fileDownload.click();
	document.body.removeChild(fileDownload);}

xmlLoader();
