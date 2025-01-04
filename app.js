const quiz = [
    {
        question: "What does HTML stand for?",
        ans1text: "Hyper Text preprocessor",
        ans2text: "Hyper Text Markup Language",
        ans3text: "Hyper Text Multiple Language",
        ans4text: "Hyper Text Multi Language",
        answer: "Hyper Text Markup Language",

    },
    {
        question: "What does CSS stand for?",
        ans1text: "common style sheet",
        ans2text: "Hyper Text Markup Language",
        ans3text: "Hyper Text Multiple Language",
        ans4text: "Hyper Text Multi Language",
        answer: "Hyper Text Markup Language",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        ans1text: "<h2>",
        ans2text: "<h3>",
        ans3text: "<h1>",
        ans4text: "<h5>",
        answer: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        ans1text: "<b>",
        ans2text: "<br>",
        ans3text: "<break>",
        ans4text: "<bre>",
        answer: "<br>",
    },
    {
        question: "Who is making the Web standards?",
        ans1text: "Mozilla ",
        ans2text: "Google",
        ans3text: "Microsoft",
        ans4text: "The World Wide Web Consortium  ",
        answer: "The World Wide Web Consortium  ",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        ans1text: "<body bg=yellow> ",
        ans2text: "<background>yellow</background>",
        ans3text: "<body style=background-color:yellow;> ",
        ans4text: "none of these ",
        answer: "<body style=background-color:yellow;>  ",


    },
    {
        question: "Which character is used to indicate an end tag?",
        ans1text: "^",
        ans2text: "<",
        ans3text: "*",
        ans4text: "/",
        answer: "/ ",
    },
    {
        question: "How can you make a numbered list?",
        ans1text: "<ol>  ",
        ans2text: "<list>",
        ans3text: "<ul>",
        ans4text: "<dl>",
        answer: "<ol>   ",
    },
    {
        question: "What is the correct HTML for making a checkbox?",
        ans1text: "<check>   ",
        ans2text: "<input type=check>",
        ans3text: "<checkbox>",
        ans4text: "<input type=checkbox>",
        answer: " <input type=checkbox>",

    },
    {
        question: "Which HTML element is used to specify a header for a document or section?",
        ans1text: " <head>   ",
        ans2text: "<header>  ",
        ans3text: "<section>",
        ans4text: "<top>",
        answer: "  <header>   ",
    }
]
const question = document.getElementById("quiz-question");
console.log(question);
console.log(question.textContent);
const option_a = document.getElementById("text_option_a");
const option_b = document.getElementById("text_option_b");
const option_c = document.getElementById("text_option_c");
const option_d = document.getElementById("text_option_d");

const answerElement = document.querySelectorAll("answer");

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);

const submit = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);

question.textContent = quiz[currentQuestion].question;
option_a.textContent = quiz[currentQuestion].ans1text;
option_b.textContent = quiz[currentQuestion].ans2text;
option_c.textContent = quiz[currentQuestion].ans3text;
option_d.textContent = quiz[currentQuestion].ans4text;

submit.addEventListener("click", () => {
    const checkedAns = document.querySelector('input[type="radio"]:checked')
    console.log(checkedAns);
    if (checkedAns === null) {
        alert("please choose the answer")
    } else {
        if (checkedAns.nextElementSibling.textContent === quiz[currentQuestion].answer) {
            score++;
        }
        checkedAns.checked = false;
        currentQuestion++;
        if (currentQuestion < quiz.length) {
            question.textContent = quiz[currentQuestion].question;
            option_a.textContent = quiz[currentQuestion].ans1text;
            option_b.textContent = quiz[currentQuestion].ans2text;
            option_c.textContent = quiz[currentQuestion].ans3text;
            option_d.textContent = quiz[currentQuestion].ans4text;
            checkedAns.checked = false;
        } else {
            alert("your score is " + score + " out of " + quiz.length);
            location.reload();
        }
    }

});









