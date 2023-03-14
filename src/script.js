const input = document.querySelector("input");
const letters = Array.from(document.querySelectorAll("[data-letters]"));
const specs = Array.from(document.querySelectorAll("[data-spec]"));
const textExample = document.querySelector("#textExample");
const symbolsPerMinute = document.querySelector("#symbolsPerMinute");
const errorPercent = document.querySelector("#errorPercent");
const wordsPerMinute = document.querySelector("#wordsPerMinute");
const select = document.querySelector('#select');

const textUa = `Думи мої, думи мої,
Лихо мені з вами!
Нащо стали на папері
Сумними рядами?..
Чом вас вітер не розвіяв
В степу, як пилину?
Чом вас лихо не приспало,
Як свою дитину?...
За карії оченята,
За чорнії брови
Серце рвалося, сміялось,
Виливало мову,
Виливало, як уміло,
За темнії ночі,
За вишневий сад зелений,
За ласки дівочі...
За степи та за могили,
Що на Україні,
Серце мліло, не хотіло
Співать на чужині...
Не хотілось в снігу, в лісі,
Козацьку громаду
З булавами, з бунчугами
Збирать на пораду.
Нехай душі козацькії
В Украйні витають -
Там широко, там весело
Од краю до краю...
Як та воля, що минулась,
Дніпр широкий - море,
Степ і степ, ревуть пороги,
І могили - гори, -
Там родилась, гарцювала
Козацькая воля;
Там шляхтою, татарами
Засідала поле,
Засівала трупом поле,
Поки не остило...`;

const textUa_1 =`ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао
пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр
фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж фж
гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс
йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь йь
іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ іщ`;

const textUa_2 = `кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т кмн26т
цушщ? цушщ? цущш? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ? цушщ?
якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг
йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж йщіж
тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб тзєб`;

const textUa_3 = `УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ УКЇЮ
СьИх, СьИх, СьИ, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх, СьИх,
ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО. ЇфсО.`;

const textUa_4 =`право; право; право; право; право; право; право; право; право;
родина: родина: родина: родина: родина: родина: родина: родина: 
Україна! Україна! Україна! Україна! Україна! Україна! Україна!
Героям Слава! Героям Слава! Героям Слава! Героям Слава! Героям Слава!`;

const textEn =`One, two,
Buckle my shoe;
Three, four,
Knock at the door;
Five, six,
Pick up sticks;
Seven, eight,
Lay them straight:
Nine, ten,
A big fat hen;
Eleven, twelve,
Dig and delve;
Thirteen, fourteen,
Maids a-courting;
Fifteen, sixteen,
Maids in the kitchen;
Seventeen, eighteen,
Maids a-waiting
Nineteen, twenty,
My plate's empty`;

const textEn_1 =`fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj fj
gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh gh
vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu vu
wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi wi
bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn bn`;

const textEn_2 =`qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm qpzm
woei woei woei woei woei woei woei woei woei woei woei woei woei woei
cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla cnla
zbros zbros zbros zbros zbros zbros zbros zbros zbros zbros zbros`;

const textEn_3 =`EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO EivO
Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq, Yvcq,
jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl. jWIl.
BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU>< BCMU><`;

const textEn_4 =`ten ten ten ten ten ten ten ten ten ten ten ten ten ten ten ten ten
Universe Universe Universe Universe Universe Universe Universe
Ukraine is beautiful! Ukraine is beautiful! Ukraine is beautiful!
Red Rue. Red Rue. Red Rue. Red Rue. Red Rue. Red Rue. Red Rue.`;

const textRus =`Белеет парус одинокой
В тумане моря голубом!..
Что ищет он в стране далекой?
Что кинул он в краю родном?..
Играют волны - ветер свищет,
И мачта гнется и скрипит...
Увы! он счастия не ищет,
И не от счастия бежит!
Под ним струя светлей лазури,
Над ним луч солнца золотой...
А он, мятежный, просит бури,
Как будто в бурях есть покой!`;

const textRus_1 = `ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао ао
пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр пр
фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи фи
гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс гс
йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ йъ`;

const textRus_2 = `кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт кмёт
цушщ цушщ цущш цуушщ цушщ цушщ цушщ цушщ цушщ цушщ цушщ цушщ цушщ
якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг якюг
йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж йщыж
тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб тзэб`;

const textRus_3 = `УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ УКЁЮ
СыИх, СыИх, СыИх, СыИх, СыИх, СыИх, СыИх, СыИх, СыИх, СыИх, СыИх,
РфсО. РфсО. РфсО. РфсО. РфсО. РфсО. РфсО. РфсО. РфсО. РфсО. РфсО.`;

const textRus_4 =`свобода свобода свобода свобода свобода свобода свобода свобода
Жолтый, Жолтый, Жолтый, Жолтый, Жолтый, Жолтый, Жолтый, Жолтый,
Родной край! Родной край! Родной край! Родной край! Родной край!
Море голубое? Море голубое? Море голубое? Море голубое? Море голубое?`;


const keyHide = document.querySelector(".key-hide");
const textShow = document.querySelector(".texterea");
const texterea = document.querySelector("#text");
const button = document.querySelector("#submit");
const el = document.querySelector("#optionText");
const darckT = document.querySelector(".darck-t");
const lightT = document.querySelector(".light-t");
const clr = document.querySelectorAll(".clr");


// Стилі для сітлої/темної теми сайту
document.querySelector('.darck-t').onclick = function() {
	darckT.style='display:none;';
	lightT.style='display:block; border-bottom-color:#8899a6;';
	document.body.style='background:#141d26';
	clr.forEach(element => {
		element.style.color='#8899a6';
	});
	select.style='color: #8899a6; background: content-box; border-color: #8899a6;';
	input.style='background: #1b2836; color:#8899a6';
	texterea.style='background: #1b2836; color:#8899a6';
	button.style='color:white';

	document.querySelector('#textExample').style='color:#8899a6';

}
document.querySelector('.light-t').onclick = function() {
	darckT.style='display:block; border-bottom-color:#000;';
	lightT.style='display:none';
	document.body.style='background:none';
	clr.forEach(element => {
		element.style.color='black';
	});
	document.querySelector('.results-title').style='color:#5c8dcb';
	select.style='color: black; border-color: groove;';
	input.style='background: none; color:#000';
	texterea.style='background: none; color:#000';
	button.style='color:black';

	document.querySelector('#textExample').style='color:#000';
}


// Перевірка на вибрану мову
select.addEventListener("change", function() {

	function textHide() {
		keyHide.style.display = "block";
		textShow.classList.add("text-hide");
	}

	let party = createParty('');
	const element = document.querySelector('#select');
	if (element.value === "English") {
		party = createParty(textEn);
		textHide();
	} if (element.value === "1_e") {
		party = createParty(textEn_1);
		textHide();
	} if (element.value === "2_e") {
		party = createParty(textEn_2);
		textHide();
	} if (element.value === "3_e") {
		party = createParty(textEn_3);
		textHide();
	} if (element.value === "4_e") {
		party = createParty(textEn_4);
		textHide();
	}

	if (element.value === "Русский") {
		party = createParty(textRus);
		textHide();
	} if (element.value === "1_р") {
		party = createParty(textRus_1);
		textHide();
	} if (element.value === "2_р") {
		party = createParty(textRus_2);
		textHide();
	} if (element.value === "3_р") {
		party = createParty(textRus_3);
		textHide();
	} if (element.value === "4_р") {
		party = createParty(textRus_4);
		textHide();
	}

	if (element.value === "Українська"){
		party = createParty(textUa);
		textHide();
	} if (element.value === "1_у"){
		party = createParty(textUa_1);
		textHide();
	} if (element.value === "2_у"){
		party = createParty(textUa_2);
		textHide();
	} if (element.value === "3_у"){
		party = createParty(textUa_3);
		textHide();
	} if (element.value === "4_у"){
		party = createParty(textUa_4);
		textHide();
	}

	
	if (element.value === "text"){

		keyHide.style.display = "none";
		textShow.classList.remove("text-hide");		

		function click(){
			if (texterea.value!='') {
				party = createParty(texterea.value);

				textHide();

				viewUpdate();
			}	
		}
		button.addEventListener('click', click, false);
	}

	

// Виклик функції, що викликає 2 метода при натисканні клавіші та віджманні
let l = 0;
init();

function init() {
	input.addEventListener("keydown", keydownHandler);
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

// Функція що опрацьовує натиснуті клавіші
function keydownHandler(event) {
	event.preventDefault();
	// const letter = letters.find((x) => x.dataset.letters.includes(event.key));

	// отримання натиснутої клавіші
	const letter = letters.filter((x) => x.dataset.letters.includes(event.key));
	
	let key = event.key.toLowerCase();
	
	if (key === " ") {
		key = "space";
		press(" ");
	}

	if (key === "enter") {
		press("\n");
	}
	
	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.add("pressed"));
		return;
	}

	console.warn("Не известный вид клавиши.", event);
	if (letter) {
		if (element.value === "Українська" || element.value === "Русский" || element.value === "1_у" || element.value === "2_у" || element.value === "3_у" || element.value === "4_у" || element.value === "1_р" || element.value === "2_р" || element.value === "3_р" || element.value === "4_р") {	
			if(event.key === ',' || event.key === '.'){
				letter.forEach(function(spec, i) {
					if (i==1) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
			if(event.key === ';' || event.key === ':' || event.key === '?'){
				letter.forEach(function(spec, i) {
					if (i==0) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
		}
		if (element.value === "English" || element.value === "1_e" || element.value === "2_e" || element.value === "3_e" || element.value === "4_e"){
			if(event.key === ',' || event.key === '.'){
				letter.forEach(function(spec, i) {
					if (i==0) {
						spec.classList.add("pressed");
					} } );
				press(event.key);
				return;
			}
			if(event.key === ';' || event.key === ':' || event.key === '"' || event.key === '?'){
				letter.forEach(function(spec, i) {
					if (i==1) {
						spec.classList.add("pressed");
					} });
				press(event.key);
				return;
			}
		}
		letter.forEach((spec) => spec.classList.add("pressed"));
		press(event.key);
		return;
	}
	// if (letter) {
	// 	letter.classList.add("pressed");
	// 	press(event.key);
	// 	return;
	// }
}

// Функція що опрацьовує клавіші, які були відпущенні після їх натискання
function keyupHandler(event) {
	event.preventDefault();

	const letter = letters.filter((x) => x.dataset.letters.includes(event.key));

	let key = event.key.toLowerCase();

	if (key === " ") {
		key = "space";
	}

	const ownSpecs = specs.filter((x) => x.dataset.spec === key);

	if (ownSpecs.length) {
		ownSpecs.forEach((spec) => spec.classList.remove("pressed"));
		return;
	}

	if (letter) {
		letter.forEach((spec) => spec.classList.remove("pressed"));

		return;
	}	
}

function createParty(text) {
	const party = {
		text,
		strings: [],
		maxStringLength: 70,
		maxShowStrings: 1,
		currentStringIndex: 0,
		currentPressedIndex: 0,
		errors: [],
		started: false,

		statisticFlag: false,
		timerCounter: 0,
		startTimer: 0,
		errorCounter: 0,
		commonCounter: 0,
	};

	party.text = party.text.replace(/\n/g, "\n ");
	const words = party.text.split(" ");

	// Цикл для опрацювання напечатаного рядка і переходу на новий, в рядку введення
	let string = [];
	for (const word of words) {
		const newStringLength =
			[...string, word].join(" ").length + !word.includes("\n");
		if (newStringLength > party.maxStringLength) {
			party.strings.push(string.join(" ") + " ");
			string = [];
		}

		string.push(word);

		if (word.includes("\n")) {
			party.strings.push(string.join(" "));
			string = [];
		}
	}

	if (string.length) {
		party.strings.push(string.join(" "));
	}

	return party;
}

// Функція в якій відбувається розрахунок помилок та відображення помилок в рядку
function press(letter) {
	party.started = true;

	if (!party.statisticFlag) {
		party.statisticFlag = true;
		party.startTimer = Date.now();
	}

	const string = party.strings[party.currentStringIndex];
	const mustLetter = string[party.currentPressedIndex];
	let psl = party.strings.length-1;
	
	if (letter === mustLetter) {
		party.currentPressedIndex++;
		
		if (string.length <= party.currentPressedIndex) {
			party.currentPressedIndex = 0;
			if (party.currentStringIndex === psl) {
				const doneClass = document.querySelector('.text');
				const finishClass =document.querySelector('.textFinish');
				doneClass.classList.add('hide');
				finishClass.classList.remove('show');
			}else{
				party.currentStringIndex++;
			}
			party.statisticFlag = false;
			party.timerCounter = Date.now() - party.startTimer;
			party.errors.length=0;
		}
	} else if (!party.errors.includes(mustLetter)) {
		party.errors.push(mustLetter);
		party.errorCounter++;
	}
	party.commonCounter++;

	viewUpdate();
}

// Функція для відображення тексту, що потрібно вводити
function viewUpdate() {
	const string = party.strings[party.currentStringIndex];
	const showedStrings = party.strings.slice(
		party.currentStringIndex,
		party.currentStringIndex + party.maxShowStrings
	);

		// console.log(showedStrings);
		
	const div = document.createElement("div");
	const firstLine = document.createElement("div");
	firstLine.classList.add("lineS");
	div.append(firstLine);

	const done = document.createElement("span");
	done.classList.add("done");
	done.textContent = string.slice(0, party.currentPressedIndex);
	
	firstLine.append(
		done,
		...string
			.slice(party.currentPressedIndex)
			.split("")
			.map((letter) => {
				// if (letter === " ") {
				// 	return "·";
				// }

				if (letter === "\n") {
					return "¶";
				}

				if (party.errors.includes(letter)) {
					const errorSpan = document.createElement("span");
					errorSpan.classList.add("hint");
					errorSpan.textContent = letter;
					return errorSpan;	
				}

				return letter;
			})
	);

	for (let i = 1; i < showedStrings.length; i++) {
		const line = document.createElement("div");
		line.classList.add("lineS");
		div.append(line);

		line.append(
			...showedStrings[i].split("").map((letter) => {
				// if (letter === " ") {
				// 	return "·";
				// }

				if (letter === "\n") {
					return "¶";
				}

				// if (party.errors.includes(letter)) {
				// 	const errorSpan = document.createElement("span");
				// 	errorSpan.classList.add("hint");
				// 	errorSpan.textContent = letter;
				// 	return errorSpan;
				// }
				return letter;
			})
		);
	}

	// Методи для відображення статистики користувача
	textExample.innerHTML = "";
	textExample.append(div);

	input.value = string.slice(0, party.currentPressedIndex);

	const wordsMinute = string.match(/[^\s]+/g);

	if (!party.statisticFlag && party.started) {
		
		wordsPerMinute.textContent = Math.round(
			(60000 * wordsMinute.length) / party.timerCounter
		);

		symbolsPerMinute.textContent = Math.round(
			(60000 * party.commonCounter) / party.timerCounter
		);

		errorPercent.textContent = Math.floor((10000 * party.errorCounter) / party.commonCounter) / 100 + "%";
	}
}
});