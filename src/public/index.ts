import {Fight} from './fight/figth';
import {Fighter, ImprovedFighter} from './fight/fighter';

export function printTxt(val){
	let str = document.createElement('p');
	str.innerHTML = val;
	document.querySelector('body').appendChild(str);
}

let inp = document.getElementById('point') as HTMLInputElement;
let btn = document.getElementById('btn') as HTMLButtonElement;

btn.addEventListener('click', () => {
	// These fighters are the same. So the work of the doubleHit() function is more understandable.
	let fighter = new Fighter("Zeus", 50, 10000);
	let improvedFighter = new ImprovedFighter("Thor", 50, 10000);

	if(inp.value === ''){
		alert('Enter numbers');
		return false;
	}

	let pointsArr = inp.value.split(',').map((item) => {
		return +item;
	});

	let battle = new Fight();
	battle.fight(fighter, improvedFighter, pointsArr);

	inp.value = '';
})