const QUESTION = [
    {
        id: 1,
        question: "Koja je najvisa planina na svetu",
        answers: ["Kilimandzaro", "Kopaonik", "Fudzi", "Mont Everest", "K2"],
        correct_answer: "Mont Everest",
        points: 5

    },
    {
        id: 2,
        question: "Koliko traje fudbalska utakmica?",
        answers: [40, 75, 60, 80, 90, 120],
        correct_answer: "90",
        points: 5

    },
    {
        id: 3,
        question: "Koje je boje nebo",
        answers: ["Zuto", "Plavo", "Crveno", "Roze", "Zeleno"],
        correct_answer: "Plavo",
        points: 5,

    }

]
let CURRENTPOINTS = 0
let questionIndex = 0
const questionContainer = document.querySelector("#pitanje")
const answersContainer = document.querySelector("#odgovori")

//Calculating maximum points player can score

const maxPoints = QUESTION.reduce((prev, curr) => { return prev + curr.points}, 0)
const renderQuestion = () => {
    const question = QUESTION[questionIndex]
    if (questionIndex < QUESTION.length) {
        //Adding new question to question container
        questionContainer.textContent = question.question
        //rendering answers for said question
        question.answers.forEach(answer => {
            const button = document.createElement("button")
            button.textContent = answer;
            button.classList.add("buttonOdgovor")
            button.onclick = () => {
                submitAnswer(question.id, button.textContent)
                //Rendering next question
                questionIndex++
                answersContainer.innerHTML = ""
                renderQuestion()
                
            }
            answersContainer.appendChild(button)
        })
    }
    //Triggered when there are no more questions in array
    else
    {
        questionContainer.textContent = "KRAJ KVIZA"
    alert(`Zavrsili ste kviz i osvojili ste ${CURRENTPOINTS} od ukupno ${maxPoints}. 
                                    CESTITAMO !!!`)
    }
}
//Function that compares right and sumbited answers
const submitAnswer = (id, answer) => {
    const question = QUESTION[questionIndex]
    if (question.id === id) {
        if (question.correct_answer === answer) {
            CURRENTPOINTS += question.points
            console.log("TACNO JE", CURRENTPOINTS)
        }
    }
}
renderQuestion()
/// kada se funkcija okine treba da se prevaci na sledece pitanje
// Ukoliko je dati odgovor tacan, dodati poene na currentscore,
//Prebaciti na sledece pitanje, bilo da je odgovor tacan ili netacan
