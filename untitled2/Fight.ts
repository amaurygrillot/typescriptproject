import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";

export class Fight{
    poke1:Pokemon;
    poke2:Pokemon;



    constructor(poke1: Pokemon, poke2: Pokemon) {
        this.poke1 = poke1;
        this.poke2 = poke2;
    }

    startFight()
    {
        const readline = require("readline");

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        while (!this.poke1.isDead() || !this.poke2.isDead())
        {
            let poke1Attack:Attack = null;
            while (poke1Attack == null)
            {
                console.log("Veuillez choisir l'attaque du pokemon 1");
                this.poke1.showAttacks();
                rl.question("Quelle attaque allez vous choisir ? ", function saveInput(attackName) {
                    console.log(`Vous avez choisi ${attackName}`);
                    poke1Attack = this.poke1.getAttack(attackName);
                    rl.close();
                });
            }
            let poke2Attack:Attack = null;
            while (poke1Attack == null)
            {
                console.log("Veuillez choisir l'attaque du pokemon 2");
                this.poke2.showAttacks();
                rl.question("Quelle attaque allez vous choisir ? ", function saveInput(attackName) {
                    console.log(`Vous avez choisi ${attackName}`);
                    poke1Attack = this.poke2.getAttack(attackName);
                    rl.close();
                });
            }
        }
    }
}