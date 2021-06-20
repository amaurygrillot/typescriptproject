import {Pokemon} from "./Pokemon";
import {Attack} from "./Attack";
let charge = new Attack("charge",1);
let poke = new Pokemon();
const inter = setInterval(() =>{
    console.log('toto every 500ms');
    i++;
    if(poke.isDead()){
        clearInterval(inter);
    }
},500)