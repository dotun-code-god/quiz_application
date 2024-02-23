var pageBody = document.querySelector("body");
var image_array = [
  "'Images/children-g772660614_1920.jpg'",
  "'Images/laptop-gd298296d4_1920.jpg'",
  "'Images/school-ge67273aaf_1920.jpg'",
  "'Images/teacher-g4d614ebad_1920.jpg'",
  "'Images/school-g724186947_1920.jpg'",
];
var welcome_page = document.querySelector(".welcome-page");
var quiz_page = document.querySelector(".quiz_questions");
var start_quiz = document.querySelector("#welcome_form + button");
var quiz_status = document.querySelector(".quiz_status");
var quiz_body = document.querySelector(".quiz_body");
var quiz_timer_text = document.querySelector(".quiz_timer > p");
var quiz_timer = document.querySelector(".quiz_timer");
var next = document.querySelector(".next");
var prev = document.querySelector(".prev");
var currentQuestion;
var qIndex = 0;
const duration = 1200;
var time = duration;
var score = 0;
var passMark = 50;
var failMark = 40;
var array_of_questions = [
  {
    question_num: "1",
    question: "In 1768, Captain James Cook set out to explore which ocean?",
    options: [
      "Pacific Ocean",
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
    ],
    answer: 0,
  },
  {
    question_num: "2",
    question: "What is actually electricity?",
    options: [
      "A flow of water",
      "A flow of air",
      " A flow of electrons",
      " A flow of atoms",
    ],
    answer: 2,
  },
  {
    question_num: "3",
    question: "Which of the following is not an international organisation?",
    options: ["FIFA", "NATO", "FIFA", " FBI"],
    answer: 3,
  },
  {
    question_num: "4",
    question: "Which of the following disorders is the fear of being alone?",
    options: ["Agoraphobia", "Aerophobia", "Acrophobia", "Arachnophobia"],
    answer: 0,
  },
  {
    question_num: "5",
    question:
      "Which of the following is a song by the German heavy metal band “Scorpions”?",
    options: [
      "Stairway to Heaven",
      "Wind of Change",
      "Don’t Stop Me Now",
      "Hey Jude",
    ],
    answer: 1,
  },
  {
    question_num: "6",
    question: "What is the speed of sound?",
    options: ["120 km/h", "1,200 km/h", "400 km/h", "700 km/h"],
    answer: 1,
  },
  {
    question_num: "7",
    question: "Which is the easiest way to tell the age of many trees?",
    options: [
      "To measure the width of the tree",
      "To count the rings on the trunk",
      "To count the number of leaves",
      "To measure the height of the tree",
    ],
    answer: 1,
  },
  {
    question_num: "8",
    question: "What do we call a newly hatched butterfly?",
    options: ["A moth", "A butter", "A caterpillar", "A chrysalis"],
    answer: 2,
  },
  {
    question_num: "9",
    question: "In total, how many novels were written by the Bronte sisters?",
    options: [4, 5, 6, 7],
    answer: 3,
  },
  {
    question_num: "10",
    question: "Which did Viking people use as money?",
    options: ["Rune stones", "Jewellery", "Seal skins", "Wool"],
    answer: 1,
  },
  {
    question_num: "11",
    question: "Which did Viking people use as money?",
    options: ["Rune stones", "Jewellery", "Seal skins", "Wool"],
    answer: 1,
  },
  {
    question_num: "12",
    question: "Which did Viking people use as money?",
    options: ["Rune stones", "Jewellery", "Seal skins", "Wool"],
    answer: 1,
  },
];

// var details;
// function startQuiz_1() {
//   details = array_of_questions.find((questions) => {
//     return questions.question_num.includes(1);
//   });
//   quizTimer(10);
//   return (quiz_body.innerHTML = `
//     <div class= "question_container"> 
//       <div class= "question_num">
//         ${details.question_num}
//       </div>
//       <div class="question_raw">
//         ${details.question}
//       </div>
//       <div class="question_options">
//         <form class="answer_inputs">
//           <div class="radio_container"><input class="state" type="radio" name="options" id="a">
//             <label class="label" for="a"><div class="indicator"></div>
//               <span class="text">${details.options[0]}</span>
//             </label>
//           </div>
//           <div class="radio_container"><input class="state" type="radio" name="options" id="b">
//             <label class="label" for="b"><div class="indicator"></div>
//               <span class="text">${details.options[1]}</span>
//             </label>
//           </div>
//           <div class="radio_container"><input class="state" type="radio" name="options" id="c">
//             <label class="label" for="c"><div class="indicator"></div>
//               <span class="text">${details.options[2]}</span>
//             </label>
//           </div>
//           <div class="radio_container"><input class="state" type="radio" name="options" id="d">
//             <label class="label" for="d"><div class="indicator"></div>
//               <span class="text">${details.options[3]}</span>
//             </label>
//           </div>
//         </form>
//       </div>
//     </div>`);
// }

//details.options[answer]
var num = 1;
// function startQuiz_2_9() {
//   let interval = setInterval(() => {
//     num++;
//     quizTimer(10);
//     if (num > array_of_questions.length - 1) clearInterval(interval);
//     details = array_of_questions.find((questions) => {
//       return questions.question_num.includes(num);
//     });
//     quiz_body.innerHTML = `
//       <div class= "question_container"> 
//         <div class= "question_num">
//           ${details.question_num}
//         </div>
//         <div class="question_raw">
//           ${details.question}
//         </div>
//         <div class="question_options">
//           <form class="answer_inputs">
//             <div class="radio_container"><input class="state" type="radio" name="options" id="a">
//               <label class="label" for="a"><div class="indicator"></div>
//                 <span class="text">${details.options[0]}</span>
//               </label>
//             </div>
//             <div class="radio_container"><input class="state" type="radio" name="options" value="second" id="b">
//               <label class="label" for="b"><div class="indicator"></div>
//                 <span class="text">${details.options[1]}</span>
//               </label>
//             </div>
//             <div class="radio_container"><input class="state" type="radio" name="options" id="c">
//               <label class="label" for="c"><div class="indicator"></div>
//                 <span class="text">${details.options[2]}</span>
//               </label>
//             </div>
//             <div class="radio_container"><input class="state" type="radio" name="options" id="d">
//               <label class="label" for="d"><div class="indicator"></div>
//                 <span class="text">${details.options[3]}</span>
//               </label>
//             </div>
//           </form>
//         </div>
//       </div>`;

//     var input_state = document.querySelectorAll("input[name=options]");
//     console.log(input_state);
//     for (const inputs of input_state) {
//       inputs.addEventListener("click", checkAnswer);
//     }
//   }, 10000);
// }

// var timer;
// function quizTimer(num) {
//   var timer = setInterval(() => {
//     num--;
//     if (num < 1) {
//       clearInterval(timer);
//       qIndex++
//       renderQuestion();
//     };
//  return (quiz_timer_text.innerHTML = `${num}s`);
//   }, 1000);
//   return (quiz_timer_text.innerHTML = `${num}s`);
// }
var interval;
function timer() {
  if (interval != undefined) clearInterval(interval);
  interval = setInterval(function () {
    time--;
    quiz_timer_text.innerHTML = `${time}s`;
    if (time < 1) {
      // nextQuestion();
      document.querySelector(`#status${qIndex - 1}`).classList.add("wrong");
    }
  }, 1000);
  return (quiz_timer_text.innerHTML = `${time}s`);
}

next.addEventListener('click', function(){
  nextQuestion();
})
prev.addEventListener('click', function(){
  prevQuestion();
})

let answers = {};
function nextQuestion(){
  var input_state = document.querySelectorAll("input.state");
  let isNotAnswered = true;
  for (const inputs of input_state) {
    if(inputs.checked){
      answers[qIndex] = inputs.getAttribute('result');
      isNotAnswered = false;
    }
  }
  if(isNotAnswered){
    document.querySelector(`#status${qIndex}`).classList.add("wrong");
  }
  qIndex++
  if(qIndex >= array_of_questions.length) return finish();
  // time += duration;
  renderQuestion();
  console.log(answers)
}
function prevQuestion(){
  qIndex--
  if(qIndex >= array_of_questions.length) {
    prev.style.display = "none";
  };
  // time += duration;
  renderQuestion();
}

function renderQuestion() {
  console.log(answers[qIndex])
  timer();
  currentQuestion = array_of_questions[qIndex];
  quiz_body.innerHTML = `
      <div class= "question_container"> 
        <div class= "question_num">
          ${currentQuestion.question_num}
        </div>
        <div class="question_raw">
          ${currentQuestion.question}
        </div>
        <div class="question_options">
          <form class="answer_inputs">
            <div class="radio_container"><input class="state" result="0" type="radio" name="options" id="a" ${answers[qIndex] == "0" && "checked"}>
              <label class="label" for="a"><div class="indicator"></div>
                <span class="text">${currentQuestion.options[0]}</span>
              </label>
            </div>
            <div class="radio_container"><input class="state" result="1" type="radio" name="options" id="b" ${answers[qIndex] == "1" && "checked"}>
              <label class="label" for="b"><div class="indicator"></div>
                <span class="text">${currentQuestion.options[1]}</span>
              </label>
            </div>
            <div class="radio_container"><input class="state" result="2" type="radio" name="options" id="c" ${answers[qIndex] == "2" && "checked"}>
              <label class="label" for="c"><div class="indicator"></div>
                <span class="text">${currentQuestion.options[2]}</span>
              </label>
            </div>
            <div class="radio_container"><input class="state" result="3" type="radio" name="options" id="d" ${answers[qIndex] == "3" && "checked"}>
              <label class="label" for="d"><div class="indicator"></div>
                <span class="text">${currentQuestion.options[3]}</span>
              </label>
            </div>
          </form>
        </div>
        
      </div>`;

  var input_state = document.querySelectorAll("input");
  for (const inputs of input_state) {
    inputs.addEventListener("click", checkAnswer);
  }
}

function checkAnswer(e) {
  if(e.target.getAttribute("result")){
    document.querySelector(`#status${qIndex}`).classList.add("running");
  }
    // if (currentQuestion.answer == e.target.getAttribute("result")) {
    //   score++;
    //   document.querySelector(`#status${qIndex}`).classList.add("correct");
    // } else {
    //   document.querySelector(`#status${qIndex}`).classList.add("wrong");
    // }
// nextQuestion();
}

function startQuiz(){
  welcome_page.style.display = "none";
  quiz_page.style.display = "flex";
  // quiz_page.style.height = "auto";
  quiz_status.style.display = "flex";
  quiz_status.style.flexWrap = "wrap";
  quiz_timer.style.display = "flex";
  result_box.style.display = "none";
  status = '';
  array_of_questions.forEach((question, index)=>{
    status += `<div class="status" id="status${index}">${index + 1} </div>`;
  })
  quiz_status.innerHTML = status;
  time = duration;
  qIndex = 0;
  renderQuestion();
  // startQuiz_2_9();
  // startQuiz_1();
};

function exitQuiz(){
  welcome_page.style.display = "flex";
  quiz_status.style.display = "none";
  result_box.style.display = "none";
}

var result_box = document.querySelector(".result_box");
var final_result = document.querySelector(".result_feedback span");
function finish(){
  clearInterval(interval);
  quiz_page.style.display = 'none'
  quiz_timer.style.display = 'none'
  result_box.style.display = 'block'
  var percentageScore = score/array_of_questions.length * 100;
  var determine_percentage = percentageScore >= passMark;
  var cater_decimal = percentageScore.toString().indexOf('.') != -1 ? percentageScore.toFixed(2): percentageScore ;
  var determine_fail = percentageScore < failMark;
  console.log('score');
  // if (percentageScore < failMark){
  //   final_result.style.color = "rgb(179, 0, 0)";
  // }
    result_box.innerHTML = `
    <div class="result">
      <img src=${
        determine_fail
          ? "Images/icons8-cross-mark-48.png"
          : "Images/cup-g7779d1a3b_1920-removebg-preview.png"
      } alt="">
      <div class="result_feedback">
          <p>${
            determine_percentage ? "Congratulations," : ""
          } You have completed the Quiz!</p>
          <p>${
            determine_percentage ? "" : "Oops! "
          }You scored<span class="${determine_fail ? 'danger': ''}">${cater_decimal}%</span></p>
      </div>
      <div class="result_button">
          <button onclick="startQuiz()">Restart Quiz</button>
          <button onclick="exitQuiz()">Exit Quiz</button>
      </div>
    </div>
  `;
  console.log(result_box)
  time = 0;
  score = 0;
}