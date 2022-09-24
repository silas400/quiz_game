let question = document.querySelector("#question")

let answers = document.querySelector("#answers")

let nextBtn = document.querySelector("#nextBtn")

let index = 0

let currentAnswers = []

// The first set of TWO answers.
let answers1 = [
    {text:'15',correct:false}, //First Answer
    {text: "12", correct:true}] // Second Answer 

let question1 = {question:'7 + 5',answers:answers1}

let answers2 = [
    {text:"25", correct:true},
    {text:"31", correct:false}]

let question2 = {question: '20 + 5', answers:answers2}

let questions = [question1, question2]

function checkAnswer(){
    nextBtn.style.display = "inline-block"
    if (this.id == "false"){
        document.body.style.backgroundColor = "red"
        console.log("WRONG ANSWER")
    }

    else{
        document.body.style.backgroundColor = "green"
        console.log("CORRECT ANSWER")
    }
}

function createAnswers(){

    if (currentAnswers.length > 0){
        currentAnswers.forEach(function(button){
            button.remove()
        })
    }

    question.textContent = 'Question: ' + questions[index].question

    questions[index].answers.forEach(function(answer){
        element = document.createElement("button")

        element.id = answer.correct

        element.textContent = answer.text

        answers.appendChild(element)

        element.addEventListener("click", checkAnswer)

        currentAnswers.push(element)
    })
}

window.addEventListener('load', createAnswers)

nextBtn.addEventListener("click", function(){
    nextBtn.style.display = "none"
    if (index + 1 != questions.length){
        index += 1
        document.body.style.backgroundColor = "white"
        createAnswers()                    
    }
})