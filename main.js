const quizData = [
    {
        question: 'How old is Toby',
        a: '10',
        b: '17',
        c: '5',
        d: '110',
        correct: 'c'
    }, {
        question: 'what is the most used progamming language in 2019',
        a: 'Java',
        b: 'c',
        c: 'Python',
        d: 'Javascript',
        correct: 'd',
    }, {
        question: 'Who is the president of US',
        a: 'Rogerr Oliva',
        b: 'Donald Trump',
        c: 'Ivan Saldano',
        d: 'Mihai Andrei',
        correct: 'b',
    }, {
        question: 'What does HTML stand for',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a',
    }, {
        question: 'what year was JS launched?',
        a: '1996',
        b: '1994',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }
];

console.log(quizData)
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.querySelector('#question');
const finishedGameHeading = document.querySelector('#quiz')
const a_text = document.querySelector('#a_text');
const b_text = document.querySelector('#b_text');
const c_text = document.querySelector('#c_text');
const d_text = document.querySelector('#d_text');
const submitBtn = document.querySelector('#submit')
const scoreEl = document.querySelector('#score')
console.log(scoreEl)


let currentQuizQuestion = 0;
let score = 1;



loadQuiz();

function loadQuiz() {
    displayScore()
  
    const currentQuizData =
        quizData[currentQuizQuestion];

    questionEl.innerText = currentQuizData.question
    console.log(currentQuizData)
    console.log(currentQuizData.question)
    console.log(question)



    a_text.innerText = currentQuizData.a
    console.log(currentQuizData.a)
    console.log(a_text)
    console.log(a)

    b_text.innerText = currentQuizData.b
    console.log(currentQuizData.b)

    c_text.innerText = currentQuizData.c
    console.log(currentQuizData.c)

    d_text.innerText = currentQuizData.d
    console.log(currentQuizData.d)
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        //console.log(answerEl.checked)
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });


    return answer;
   
}

function displayScore(){

   scoreEl.innerText = `Points: ${score}` 

}

function displayFinalScore(){
    scoreEl.innerText = `Your final score is ${score}/${quizData.length}`
}

function removeScore(){
    scoreEl.innerText = null
}

function deselectAnswers(){

    answerEls.forEach((answerEl) => {
        //console.log(answerEl.checked)
        answerEl.checked = false
    });
}

function removeQuestions(){
   finishedGameHeading.innerText = `Congrats!`
}

function addRefreshButton(){
    submitBtn.innerText = `Try Again!`

}


submitBtn.addEventListener('click', () => {
    // check to see if answer got selected
        const answer = getSelected();
        console.log(answer);
    
        
        if(answer) {
            if(answer === quizData[currentQuizQuestion].correct){
                score++;
                displayScore()
                console.log(score)
            }

            currentQuizQuestion++;
            deselectAnswers()
            if (currentQuizQuestion < quizData.length) {
                loadQuiz();
            } else {
                alert("You're finished, take a beer");
                removeQuestions()
                displayFinalScore();
                addRefreshButton();
                submitBtn.addEventListener('click', () => {location.reload()})
            } 

        }
 
})

console.log('hello world')