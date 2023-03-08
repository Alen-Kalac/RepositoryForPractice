const DATA1 = [2, 26, 38, 75, 11, 29]
function prviZadatak() {
    const DATA2 = ["a", "b", "c", "d", "e"]
    let pomocniNiz = DATA1.concat(DATA2)
    let PomocniNizDva = pomocniNiz.filter((el) => el % 2 === 0)
    console.log(pomocniNiz)
    console.log(PomocniNizDva)
    // PomocniNizDva.unshift(10)
    // PomocniNizDva.unshift(20)

    PomocniNizDva = [10, 20, ...PomocniNizDva]
    // [2,26,38] = [10,20, ...[2,26,28]]
    console.log(PomocniNizDva)
}
// prviZadatak()

//Drugi zadatak

function cetvrtiZadatak() {
    const kvadriraniBrojevi = DATA1.map((el, index) => {
        if (index === 0 || index === 3 || index === 5) {
            return el * el
        }
        else
            return el
    })
    console.log(`Brojevi pre kvadriranje ${DATA1}`)
    console.log(`Brojevi posle kvadriranje ${kvadriraniBrojevi}`)
}
// cetvrtiZadatak()
function petiZadatak() {
    const numbers2 = [2, 5, 10, 3, 4, 8]

    let noviNiz = numbers2.map((el) => {
        if (el > 2) {
            if (el < 8) {
                return (el * 4) / 2
            }
            return el * 7
        }
        return el
    }).filter((el) => el < 10)

    console.log(`Niz pre funkcije ${numbers2}`)
    console.log(`Niz posle funkcije ${noviNiz}`)
}
// petiZadatak()

function sedmiZadatak(){
    const words = ["televizor","daljinski","telefon","voda","ranac","stolica"]
    const filtriraniNiz  = words.filter((el)=>{
        if(el[1] === "e")
        return el
        
    })
    console.log(filtriraniNiz)
}

sedmiZadatak()