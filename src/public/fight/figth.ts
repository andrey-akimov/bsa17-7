import {Fighter, ImprovedFighter} from './fighter';
import {printTxt} from '../index';


export interface IFight {
    fight: (fighter: Fighter, improvedFighter: ImprovedFighter, point: number[]) => void;
}

export class Fight implements IFight{
	fight(fighter, improvedFighter, point){
		printTxt("Let's get ready to rumble!");

		while(true){
			let randomPoint = point[Math.floor(Math.random() * point.length)];
			fighter.hit(improvedFighter, randomPoint);

			if(improvedFighter.health <= 0){
				printTxt(`${fighter.name} won!`);
				break;
			}

			// Сhance to critycal strike is 25%.
			if(Math.random() < .25){
				improvedFighter.doubleHit(fighter, randomPoint);
				printTxt(`*** ${improvedFighter.name} slammed DOUBLE HIT! ***`);
			} else {
				improvedFighter.hit(fighter, randomPoint);
			}

			if(fighter.health <= 0){
				printTxt(`${improvedFighter.name} won!`);
				break;
			}
		}
	}
}