import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {

  console.log("Hello Rigo from the console!");
};

let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];

 for(let i=0; i < pronoun.length; i ++){
  for(let x=0; x < adj.length; x ++){
    for(let p=0; p < noun.length; p ++){
      let Dominio = pronoun[i]+adj[x]+noun[p]+ ".com";
      console.log(Dominio);
    }
  }
}
