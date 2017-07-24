import {printTxt} from '../index';

export interface IFighter{
	name: string;
	power: number;
	health: number;
	hit: (enemy: Fighter, point: number) => void;
}

export class Fighter implements IFighter{
	name: string;
	power: number;
	health: number;

	constructor(name = "Great warrior", power = 10, health = 100){
		this.name = name;
		this.power = power;
		this.health = health;
	}

	private _setDamage(damage){
		this.health -= damage;
        if(this.health < 0 || this.health === 0){
            printTxt(`${this.name}'s health could not resist the final blow`);
        } else {
            printTxt(`${this.name} got ${damage} points damage, his health is: ${this.health}`);
        }
	}

	hit(enemy: Fighter, point){
		let damage = point * this.power;
		enemy._setDamage(damage);
	}
}

export class ImprovedFighter extends Fighter{
	doubleHit(enemy, point){
		let doublePoint = point * 2;
		this.hit(enemy, doublePoint);
	}
}