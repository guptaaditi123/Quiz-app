const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        ans: "ans4",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars Super Sailboats",
        ans: "ans2",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals  Lamborginis",
        ans: "ans1",
    },
    {
        question: "What is the correct HTML for referring to an external style sheet?",
        a: "At the end of the document",
        b: "In the <head> section",
        c: "In the <body> section",
        d: "none of the above",
        ans: "ans2",
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?",
        a: "<css>",
        b: "<script>",
        c: "<style>",
        d: "<link>",
        ans: "ans3",
    }
    

];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const Score = document.querySelector('#Scores');

let Count = 0;
let score = 0;
const loadquestion = () => {

const list = quizData[Count];
   question.innerText = list.question;

   option1.innerText = list.a;
   option2.innerText = list.b;
   option3.innerText = list.c;
   option4.innerText = list.d;

}
loadquestion();
 const GetCheckAnswer = () => {
    let answer;
    answers.forEach((currentanswer) => {
        if(currentanswer.checked){
            answer = currentanswer.id;
        }

        
        
    });
    return answer;

 };
 const deselectall = () => {
    answers.forEach((currentanswer) => currentanswer.checked = false); 

 }

submit.addEventListener('click',() => {
    const CheckAnswer = GetCheckAnswer();
    console.log(CheckAnswer);

    if(CheckAnswer ==  quizData[Count].ans){
        score++;
    };
    Count++;

    deselectall();
    if(Count < quizData.length){
        loadquestion();
    }else{
        Scores.innerHTML = `
              <h3> your Score ${score}/${quizData.length} Good</h3>
                <button class ="btn" onclick="location.reload()">Play Again</button>
        `;

    Scores.classList.remove('ScoreArea');
    }
});


