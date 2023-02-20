const studenti = [
    student1 = {
        ime: "Alen",
        prezime: "Kalac",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [7, 8, 9, 10],
    },
    student2 = {
        ime: "Dzenis",
        prezime: "Hocanin",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [8, 8, 10, 10],
    },

    student3 = {
        ime: "Osman",
        prezime: "Pulic",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [6, 10, 10, 10],
    },
    student4 = {
        ime: "A",
        prezime: "J",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [9, 7, 10, 9],
    },
    student5 = {
        ime: "B",
        prezime: "K",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [6, 7, 10, 9],
    },
    student6 = {
        ime: "C",
        prezime: "Q",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [6, 10, 9, 9],
    },
    student7 = {
        ime: "D",
        prezime: "PulTic",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [10, 7, 10, 9],
    },
    student8 = {
        ime: "F",
        prezime: "Y",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [10, 7, 10, 9],
    },
    student9 = {
        ime: "G",
        prezime: "U",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [9, 7, 9, 10],
    },
    student10 = {
        ime: "H",
        prezime: "A",
        predmeti: ["Matematika", "Fizika", "Hemija", "Engleski"],
        ocene: [10, 7, 9, 10],
    }

]

studenti.forEach(el => {
    el.prosek= (el.ocene.reduce((prev,curr)=> prev+curr,0))/el.predmeti.length-1
}
   )

   console.log(studenti)

   const dobriStudenti =  studenti.filter(el=> (el.prosek >= 8) && el  )
   console.log("Studenti koji imaju proske visi od 8 su :", dobriStudenti )