const questions = [
    {   
        subject: 'Politics',
        question: 'Who is the President of Nigeria?',
        answers: [
            {text: "Mohammed Buhari", value: false},
            {text: "Jeff Bezos", value: false},
            {text: "Bola Ahmed Tinubu", value: true},
            {text: "Bill Gates", value: false}
        ]
    },
    {   
        subject: 'Science',
        question: 'Which planet is known as the "Red Planet"?',
        answers: [
            {text: "Venus", value: false},
            {text: "Jupiter", value: false},
            {text: "Saturn", value: false},
            {text: "Mars", value: true}
        ]
    },
    {   
        subject: 'Science',
        question: 'What is the chemical symbol for oxygen?',
        answers: [
            {text: "02", value: false},
            {text: "H20", value: false},
            {text: "F3", value: false},
            {text: "0", value: true}
        ]
    },
    {   
        subject: 'Science',
        question: 'What process do plants use to convert sunlight into energy?',
        answers: [
            {text: "Respiration", value: false},
            {text: "Photosynthesis", value: true},
            {text: "Digestion", value: false},
            {text: "Transpiration", value: false}
        ]
    },
    {   
        subject: 'History',
        question: 'Who was the first person to walk on the moon?',
        answers: [
            {text: "Buzz Aldrin", value: false},
            {text: "Neil Armstrong", value: true},
            {text: "Russia", value: false},
            {text: "Yuri Gagarin", value: false}
        ]
    },
    {   
        subject: 'History',
        question: 'In which year did World War II end?',
        answers: [
            {text: "1918", value: false},
            {text: "1945", value: true},
            {text: "1903", value: false},
            {text: "1976", value: false}
        ]
    },
    {   
        subject: 'History',
        question: 'Who painted the Mona Lisa?',
        answers: [
            {text: "Vincent van Gogh", value: false},
            {text: "Pablo Picasso", value: false},
            {text: "Leonardo da Vinci", value: true},
            {text: "Michelangelo", value: false}
        ]
    },

    {   
        subject: 'Geography',
        question: 'Which is the largest country in the world by land area?',
        answers: [
            {text: "Canada", value: false},
            {text: "China", value: false},
            {text: "Russia", value: true},
            {text: "United States", value: false}
        ]
    },
    {   
        subject: 'English Language',
        question: 'Which word is a synonym for "happy"?',
        answers: [
            {text: "Tired", value: false},
            {text: "Angry ", value: false},
            {text: "Joyful ", value: true},
            {text: "Sad", value: false}
        ]
    },
    {   
        subject: 'Geography',
        question: 'What is the capital of France?',
        answers: [
            {text: "Berlin", value: false},
            {text: "Rome", value: false},
            {text: "Paris", value: true},
            {text: "Madrid", value: false}
        ]
    },
    {   
        subject: 'English Language',
        question: 'What part of speech is the word "quickly" in the sentence "The dog ran quickly"?',
        answers: [
            {text: "Noun", value: false},
            {text: "Adjective", value: false},
            {text: "Verb", value: true},
            {text: "Interjection", value: false}
        ]
    },
    {   
        subject: 'English Language',
        question: 'What is a group of lions called?',
        answers: [
            {text: "Envy", value: false},
            {text: "Pride", value: true},
            {text: "Flock", value: false},
            {text: "Fleet", value: false}
        ]
    },
]

var current = 0;
var correc = 0;
var incorrec = 0;

const query = document.querySelector('.container .operation .question p');
const subject = document.querySelector('.container .operation .subject p');
const options = document.querySelector('.container .operation .answers .options');
const currentQuestion = document.querySelectorAll('.container .operation .guide span')[1];
const totalQuestions = document.querySelectorAll('.container .operation .guide span')[3];
const start = document.querySelector('.start button');
const end = document.querySelector('.end');
const restart = document.querySelectorAll('.end button')[0];
const endBtn = document.querySelectorAll('.end button')[1];

start.onclick = function(){
    document.querySelector('.start').classList.add('vanish')
}
restart.onclick = function(){
    document.querySelector('.container .operation').style.display = "";
    current = 0;
    incorrec = 0;
    correc = 0;
    end.classList.remove('appear');
    startQuiz();
}
endBtn.onclick = function(){
    end.classList.remove('appear');
    
}

function startQuiz(){
    const incorrect = document.querySelector('.end h4 span');
    const correct = document.querySelector('.end h3 span');
    const AllQuestions = document.querySelector('.end h2 span');
    const score = document.querySelectorAll('.end h1 span')[0];
    incorrect.innerHTML = incorrec;
    correct.innerHTML = correc;
    AllQuestions.innerHTML = questions.length
    score.innerHTML = correc;
    document.querySelectorAll('.end h1 span')[1].innerHTML = questions.length;

    if (current >= questions.length){
        end.classList.add('appear');
        document.querySelector('.container .operation').style.display = "none";
    }
    currentQuestion.innerHTML = current + 1
    totalQuestions.innerHTML = questions.length
    let prevOptions = [...options.children];
    prevOptions.forEach(child => {
        options.removeChild(child);
    })
    query.textContent = questions[current].question;
    subject.textContent = questions[current].subject;
    questions[current].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.value = answer.value;
        options.appendChild(button);
    })
    checkAnswers();
}
startQuiz();

function checkAnswers(){
    const buttons = [...options.children];
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.value === 'true'){
                correc++;
            }
            else{
                incorrec++;
            }
            current++;
            startQuiz();
        });
    });
};