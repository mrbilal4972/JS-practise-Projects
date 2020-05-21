function Display() {

}

function QA(questions, answers) {
    this.questions = questions;
    this.answers = answers;
}

Display.prototype.showQcard = function () {
    let questionCard = document.getElementById('questionCard');
    questionCard.classList.add('showItem');
}

Display.prototype.removeQcard = function () {
    let questionCard = document.getElementById('questionCard');
    questionCard.classList.remove('showItem');
}

Display.prototype.clearInput = function (questionInput, answerInput) {
    questionInput.value = "";
    answerInput.value = "";
}

Display.prototype.addQAcard = function (QAcard) {
    let ques = [];
    let questionsList = document.getElementById('questions-list');
    if (localStorage.getItem('questions') !== null) {
        ques = JSON.parse(localStorage.getItem('questions'));
        ques.push(QAcard);
    } else {
        ques = [];
        ques.push(QAcard);
    }
    localStorage.setItem('questions', JSON.stringify(ques))
    console.log(ques)
    questionsList.innerHTML = ""
    ques.forEach((item, index) => {
        questionsList.insertAdjacentHTML("beforeend", `<div class="col-md-4">
                                                            <!-- Template for card data -->
                                                            <div class="card card-body flashcard my-3">
                                                            <h4 class="text-capitalize">${item.questions}</h4>
                                                            <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
                                                            <h5 class="answer mb-3">${item.answers}</h5>
                                                            <div class="flashcard-btn d-flex justify-content-between">
                                                            <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
                                                            <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
                                                            </div>
                                                        </div> `);
    })
}

Display.prototype.showQAcard = function () {
    let questionsList = document.getElementById('questions-list');
    if (localStorage.getItem('questions') !== null) {
        ques = JSON.parse(localStorage.getItem('questions'));
        questionsList.innerHTML = ""
        ques.forEach((item, index) => {
            questionsList.insertAdjacentHTML("beforeend", `<div class="col-md-4">
                                                                <!-- Template for card data -->
                                                                <div class="card card-body flashcard my-3">
                                                                <h4 class="text-capitalize">${item.questions}</h4>
                                                                <a href="#" class="text-capitalize my-3 show-answer">show/hide answer</a>
                                                                <h5 class="answer mb-3">${item.answers}</h5>
                                                                <div class="flashcard-btn d-flex justify-content-between">
                                                                <a href="#" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
                                                                <a href="#" id="delete-flashcard" class=" btn my-1 delete-flashcard text-uppercase">delete</a>
                                                                </div>
                                                            </div> `);
        });
    } else {
        questionsList.innerHTML = `<p>No questions to show</p>`
    }
}

Display.prototype.showAnswer = function(index){
    let ans = document.getElementsByClassName('answer')[index];
    if(ansHidden){
        ans.classList.add('showItem');
        ansHidden = false;   
    }else{
        ans.classList.remove('showItem');
        ansHidden = true;
    }
}

function insertQAcard(e) {
    e.preventDefault();
    let questionInput = document.getElementById('question-input');
    let answerInput = document.getElementById('answer-input');
    let QAcard = new QA(questionInput.value, answerInput.value);
    console.log(QAcard);

    display.addQAcard(QAcard);
    display.showQAcard();
    display.clearInput(questionInput, answerInput);
}

let display = new Display();

display.showQAcard();

let addQuestion = document.getElementById('show-btn');
addQuestion.addEventListener('click', () => {
    display.showQcard();
});

let closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    display.removeQcard();
});

let saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', insertQAcard);

let showAnswer = document.querySelectorAll('.show-answer');
let ansHidden = true;
Array.from(showAnswer).forEach((i, index) => {
    i.addEventListener('click', (e) => {
        e.preventDefault();
        display.showAnswer(index);
    })
})




// display.showQAcard();
// console.log(localStorage.getItem('questions'));