import {Attack} from "./Attack";

export class Pokemon{
    private _name: string;
    private _attacks : Attack[] = new Array(4);
    private _hp : number;
    private _speed : number;


    constructor(name: string, attacks: Attack[], hp: number, speed: number) {
        this._name = name;
        this._attacks = attacks;
        this._hp = hp;
        this._speed = speed;
    }

    public getAttack(attackName:String):Attack
    {
        for (let i = 0; i < this._attacks.length; i++)
        {
            if(this._attacks[i].name.trim().toLowerCase() == attackName.trim().toLowerCase())
            {
                return this._attacks[i];
            }
        }
        return null;
    }

    public showAttacks()
    {
        for (let i = 0; i < this._attacks.length; i++)
        {
            console.log("\n"+this._attacks[i].name);
        }
    }
    isDead():boolean{
        return this._hp <= 0;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get attacks(): Attack[] {
        return this._attacks;
    }

    set attacks(value: Attack[]) {
        this._attacks = value;
    }

    get hp(): number {
        return this._hp;
    }

    set hp(value: number) {
        this._hp = value;
    }

    get speed(): number {
        return this._speed;
    }

    set speed(value: number) {
        this._speed = value;
    }
}
