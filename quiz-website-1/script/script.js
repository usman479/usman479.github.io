let questions = [
    {
        question: "Q1: What does CSS stands for?",
        ans1: "Cascading Sheet Style",
        ans2: "Cascading Style Sheet",
        ans3: "Creative Style Sheet",
        ans4: "Colorful Style Sheet",
        answer: "ans2"
    },

    {
        question: "Q2: What does JS stands for?",
        ans1: "JaySon",
        ans2: "JohnSon",
        ans3: "JavaScript",
        ans4: "Johnny",
        answer: "ans3"
    },
    {
        question: "Q3: Choose the correct HTML element to define emphasized text",
        ans1: "em",
        ans2: "italic",
        ans3: "i",
        ans4: "emphasize",
        answer: "ans1"
    },
    {
        question: "Q4: What does HTML stand for?",
        ans1: "Home Tool Markup Language",
        ans2: "Hyperlinks and Text Markup Language",
        ans3: "Hyper Text Markup Language",
        ans4: "Hyper Tool Markup Language",
        answer: "ans3"
    },
    {
        question: "Q5: Which HTML tag is used to define an internal style sheet?",
        ans1: "script",
        ans2: "style",
        ans3: "css",
        ans4: "link",
        answer: "ans2"
    },{
        question: "Q6: Who is making the Web standards?",
        ans1: "Mozilla",
        ans2: "Google",
        ans3: "Microsoft",
        ans4: "The World Wide Web Consortium",
        answer: "ans4"
    },{
        question: "Q7: Which HTML attribute is used to define inline styles?",
        ans1: "class",
        ans2: "styles",
        ans3: "font",
        ans4: "style",
        answer: "ans4"
    },{
        question: "Q8: Which of these is not a programming language?",
        ans1: "C++",
        ans2: "Java",
        ans3: "CSS",
        ans4: "JavaScript",
        answer: "ans3"
    },{
        question: "Q9: Which is the correct CSS syntax?",
        ans1: "body:color=black;",
        ans2: "body {color:black;}",
        ans3: "{body:color=black;}",
        ans4: "{body;color:black;}",
        answer: "ans2"
    },{
        question: "Q10: Which character is used to indicate an end tag?",
        ans1: "<",
        ans2: "*",
        ans3: "/",
        ans4: ">",
        answer: "ans3"
    },
];


let questionsCount = 0;
let score = 0;
const numOfQuestions = questions.length;
const question = document.getElementById("question");
const answer1 = document.getElementById("rad1");
const answer2 = document.getElementById("rad2");
const answer3 = document.getElementById("rad3");
const answer4 = document.getElementById("rad4");
const previous = document.getElementsByClassName("hide")[0];

function start() {
    previous.setAttribute("class", "")
    question.innerHTML = questions[questionsCount].question;
    answer1.innerHTML = questions[questionsCount].ans1;
    answer2.innerHTML = questions[questionsCount].ans2;
    answer3.innerHTML = questions[questionsCount].ans3;
    answer4.innerHTML = questions[questionsCount].ans4;
    document.getElementById("start").style.display = "none";
    document.getElementById("submit-button").style.display = "inline";
    document.getElementById("list").style.display = "block";
    question.setAttribute("style", "")
    questionsCount++;
};



function next() {
    const finalAnswer = document.getElementsByName("answer");
    if (questionsCount < numOfQuestions) {
        question.innerHTML = questions[questionsCount].question;
        answer1.innerHTML = questions[questionsCount].ans1;
        answer2.innerHTML = questions[questionsCount].ans2;
        answer3.innerHTML = questions[questionsCount].ans3;
        answer4.innerHTML = questions[questionsCount].ans4;
    }
    if(questionsCount === numOfQuestions-1) {
        document.getElementById("submit-button").setAttribute("class", "submit-button-style");
        document.getElementById("submit-button").innerText = "Submit";
        
        
    }
    for (let i = 0; i < finalAnswer.length; i++) {
        if (finalAnswer[i].checked) {
            if (finalAnswer[i].value === questions[questionsCount - 1].answer) {
                score++
            }
            
        };
    };
    if (questionsCount === numOfQuestions) {
        document.getElementById("result").setAttribute("id", "");
        document.getElementById("main").style.display = "none";
        document.getElementById("show-result").innerHTML = score + "/" + numOfQuestions + "<br>" + "Percentage : " + (((score/numOfQuestions)*100).toFixed(1)) + "%" ;
    }
    for(let i = 0; i < finalAnswer.length; i++) {
        if(finalAnswer[i].checked) {
            finalAnswer[i].checked = false;
        }
    }
    questionsCount++;
    console.log(score)

};










