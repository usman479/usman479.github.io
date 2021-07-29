let questions = [
    {
        question: "Q1: What does CSS stands for?",
        ans1: "Cascading Sheet Style",
        ans2: "Cascading Style Sheet",
        ans3: "Car Seat Side",
        ans4: "Caricature Style Sheet",
        answer: "ans2"
    },

    {
        question: "Q2: What does JS stands for?",
        ans1: "Jay Son",
        ans2: "JohnSon",
        ans3: "JavaScript",
        ans4: "Johnny",
        answer: "ans3"
    },
    {
        question: "Q3: Which one of these is not a programming language?",
        ans1: "Python",
        ans2: "CSS",
        ans3: "Java",
        ans4: "JavaScript",
        answer: "ans2"
    },
    {
        question: "Q4: Which is our favourite programming language?",
        ans1: "JavaScript",
        ans2: "C++",
        ans3: "Python",
        ans4: "Java",
        answer: "ans1"
    },
    {
        question: "Q5: Which is the capital of pakistan?",
        ans1: "Lahore",
        ans2: "Multan",
        ans3: "Islamabad",
        ans4: "Karachi",
        answer: "ans3"
    },
];

let questionsCount = 0;
let score = 0;
const question = document.getElementById("question");
const answer1 = document.getElementById("rad1");
const answer2 = document.getElementById("rad2");
const answer3 = document.getElementById("rad3");
const answer4 = document.getElementById("rad4");




function check() {
    const finalAnswer = document.getElementsByName("answer");
    if (questionsCount < 5) {
        question.innerHTML = questions[questionsCount].question;
        answer1.innerHTML = questions[questionsCount].ans1;
        answer2.innerHTML = questions[questionsCount].ans2;
        answer3.innerHTML = questions[questionsCount].ans3;
        answer4.innerHTML = questions[questionsCount].ans4;
    }
    for (let i = 0; i < finalAnswer.length; i++) {
        if (finalAnswer[i].checked) {
            if (finalAnswer[i].value === questions[questionsCount - 1].answer) {
                score++
            }

        };
    };
    if (questionsCount === 5) {
        document.getElementById("result").setAttribute("id", "");
        document.getElementById("main").style.display = "none";
        document.getElementById("show-result").innerHTML = score + "/5";
    }
    questionsCount++;
    console.log(score)

};


function start() {
    question.innerHTML = questions[0].question;
    answer1.innerHTML = questions[0].ans1;
    answer2.innerHTML = questions[0].ans2;
    answer3.innerHTML = questions[0].ans3;
    answer4.innerHTML = questions[0].ans4;
    document.getElementById("start").style.display = "none";
    document.getElementById("submit-button").style.display = "inline";
    document.getElementById("list").style.display = "block";
    questionsCount++;
};





