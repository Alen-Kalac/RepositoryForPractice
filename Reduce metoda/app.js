




const niz = [1,2,3,4,5,6,7,8,9,10];

//Reduce metoda prima dva parametra, funkciju i pocetnu vrednost
//Ako nema pocetne vrednosti , ona je pocetna vrednost prvi clan niza
//Reduce metoda kao povratnu informaciju ima samo jednu vrednost 







//1.Zbir svih clanova niza
const zbir= niz.reduce(
    function sabiranjeSvih(prethodna,sadasnja){
    return prethodna+=sadasnja;
},0)
console.log(`Zbir svih clanova niza je ${zbir}`);












/// *** Primer za pocetnu vrednost
//2.Min i Max vrednost u nizu
const Max = niz.reduce(
    function maksVrednost(prethodna,sadasnja){
        if(prethodna === null || sadasnja > prethodna){
            return sadasnja;
        }
        return prethodna;

    },null);
    console.log(`Najveca vrednost u nizu je ${Max}`);

//Primer za Minimalnu vrednost

   const Min = niz.reduce(
        function maksVrednost(prethodna,sadasnja){
            if(prethodna === null || sadasnja < prethodna){
                return sadasnja;
            }
            return prethodna;
    
        },null);
        console.log(`Najmanja vrednost u nizu je ${Min}`);



















//3.Racunanje srednjevrednosti Niza;
const euros = [29.76, 41.85, 46.5];

const average = euros.reduce((total, amount, index, array) => {
  total += amount;
  if( index === array.length-1) { 
    return total/array.length;
  }else { 
    return total;
  }
});
console.log(`Srednja vrednost niza iznosi ${average}`);


















// *** Primer za pocetnu vrednost
//4.Spajanje clanova niza koji samo po sebi jesu niz u obicne clanove.
const nizSaNizovima = [1,2,[3,4,5],[6,7],8,[9,10]];

const nizBezNizova = nizSaNizovima.reduce(function odgradjivanje(prethodna,sadasnja){
    return prethodna.concat(sadasnja);
},[])
console.log(nizSaNizovima);
console.log(`Niz nakon reduce metode ${nizBezNizova}`);
