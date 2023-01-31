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
My plate’s empty`;

const textRus =`Белеет парус одинокой
В тумане моря голубом!..
Что ищет он в стране далекой?
Что кинул он в краю родном?..
Играют волны - ветер свищет,
И мачта гнется и скрипит…
Увы! он счастия не ищет,
И не от счастия бежит!
Под ним струя светлей лазури,
Над ним луч солнца золотой…
А он, мятежный, просит бури,
Как будто в бурях есть покой!`;

select.addEventListener("change", function() {
	let party = createParty(textUa);
	const element = document.querySelector('#select');
	if (element.value === "English") {
		party = createParty(textEn);
		
	}else if (element.value === "Русский") {
		party = createParty(textRus);
	}else{
		party = createParty(textUa);
	}
	
  
let l = 0;
init();

function init() {
	input.addEventListener("keydown", keydownHandler);
	input.addEventListener("keyup", keyupHandler);

	viewUpdate();
}

function keydownHandler(event) {
	event.preventDefault();
	// const letter = letters.find((x) => x.dataset.letters.includes(event.key));

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
		if (element.value === "Українська" || element.value === "Русский") {	
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
		}else{
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
		maxShowStrings: 3,
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

function viewUpdate() {
	const string = party.strings[party.currentStringIndex];
	const showedStrings = party.strings.slice(
		party.currentStringIndex,
		party.currentStringIndex + party.maxShowStrings
	);

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
				if (letter === " ") {
					return "·";
				}

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
				if (letter === " ") {
					return "·";
				}

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