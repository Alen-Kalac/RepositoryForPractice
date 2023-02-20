// 1..Primer

var obj1 = { broj: 10 };

function sabiranje(a, b){
  return this.broj + a + b;
}

const sabiranjeCall  = sabiranje.call(obj1, 7,10); //call 1
const rezultatCall = sabiranje.apply(obj1, [7,10]);// apply 1
const sabiranjeBind    = sabiranje.bind(obj1, 7,10)
const rezultatSabiranjeBind = sabiranjeBind(); // bind 1
console.log(rezultatCall, rezultatSabiranjeBind, sabiranjeCall)

//2. primer

let  Alen = {
  mnozenje: function (a, b, c) {
      return a * b * c;
  }
}
function Pomnozi(a, b, c) {
  return this.mnozenje(a, b, c);
}
console.log(Pomnozi.apply(Alen, [6, 7, 8])); //apply 2
console.log(Pomnozi.call(Alen, 8, 9, 10)); // call 2 
const oldTech = Pomnozi.bind(Alen); // bind 2
console.log(oldTech(2, 3, 4));


let Jelo = {

  dezert:"Monaliza"
};
function fav(text, rating) {

  return `Preporucujemo vam da probate ${this.dezert} ${text} ${rating}`;
}
console.log(fav.call(Jelo, "je odlicna", 10)); //call
console.log(fav.apply(Jelo, ["je odlicna", 9.6])); // apply
const bindJelo = fav.bind(Jelo); // bind
console.log(bindJelo( "je odlicna", 8.9));