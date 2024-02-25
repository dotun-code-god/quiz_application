var pageBody = document.querySelector("body");
var image_array = [
  "'Images/children-g772660614_1920.jpg'",
  "'Images/laptop-gd298296d4_1920.jpg'",
  "'Images/school-ge67273aaf_1920.jpg'",
  "'Images/teacher-g4d614ebad_1920.jpg'",
  "'Images/school-g724186947_1920.jpg'",
];
var welcome_page = document.querySelector(".welcome-page");
var welcome_text = document.querySelector(".welcome-text");
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
    question: "The 6th term of a G.P. is 32 and its 8th term is 128, then find the common ratio of the G.P.",
    options: [
      1,
      4,
      2,
      7,
    ],
    answer: 2,
  },
  {
    question_num: "2",
    question: "The zeroes of 𝑥 2 − 2𝑥 − 8 are",
    options: ["(2, −4)", "(4, −2)", "(−2, −2)", "(−4, −4)"],
    answer: 1,
  },
  {
    question_num: "3",
    question: "If the zeroes of the quadratic polynomial 𝑎𝑥 2 + 𝑏𝑥 + 𝑐, 𝑐 ≠ 0 are equal, then ",
    options: ["c and b have opposite signs", "c and a have opposite signs", "c and b have same signs", " c and a have same signs"],
    answer: 3,
  },
  {
    question_num: "4",
    question: "Transpose of a rectangular matix is",
    options: ["scalar matrix", "square matrix", "diagonal matrix", "rectangular matrix"],
    answer: 3,
  },  
  {
    question_num: "5",
    question:
      "Find the value of k, if (x-2) is a factor of 4𝑥3 + 3𝑥2 − 4𝑥 + k",
    options: [
      "12",
      "-12",
      "36",
      "-36",
    ],
    answer: 3,
  },
  {
    question_num: "6",
    question: "Simplify 𝑠𝑖𝑛𝜃/𝑐𝑜𝑠𝜃 ",
    options: ["𝑐𝑜𝑠𝑒𝑐𝜃", "𝑐𝑜𝑠𝜃", "𝑐𝑜𝑡𝜃", "𝑡𝑎𝑛𝜃"],
    answer: 3,
  },
  {
    question_num: "7",
    question: "Solve 2+√3/3−√3",
    options: ["2√6", "5/2√2", "9+5√3/6", "1/√3"],
    answer: 2,
  },
  {
    question_num: "8",
    question: "If 𝛼, 𝛽 are roots of the equation 2𝑥2 − 8𝑥 − 5 = 0, find the values of 𝛼2 + 𝛽2",
    options: ["26", "21", "4√26", "9"],
    answer: 3,
  },
  {
    question_num: "9",
    question: "Solve: 2𝑥 + 𝑦 = 13 and 𝑥 − 𝑦 = 8",
    options: [" 𝑥 = 3, 𝑦 = −1 ", " 𝑥 = 4, 𝑦 = −1 ", " 𝑥 = 7, 𝑦 = −1", "𝑥 = 𝑎, 𝑦 = 0"],
    answer: 2,
  },
  {
    question_num: "10",
    question: "Simplify √20 + √45 + √125 − 2√80 ",
    options: ["2√3", "2√7", "2√5", "11√2"],
    answer: 2,
  },
  {
    question_num: "11",
    question: "Find the gradient m of the line passing through (1, 3) and (-4, 2)",
    options: ["m=1/2", "m=-1/5", "m=-1/6", "m=1/5"],
    answer: 3,
  },
  {
    question_num: "12",
    question: "The equation of a line whose gradient is 5 and intercept on y axis is -6 is",
    options: ["𝑦 = −6𝑥 + 5", " 𝑦 = 5𝑥 − 6", " 𝑦 = 5𝑥 − 3 ", "𝑦 = −5𝑥 − 6"],
    answer: 1,
  },
  {
    question_num: "13",
    question: "Find the angle of slope 𝜃 of the line passing through these points (1, 3) and (-4, 2)",
    options: [" 𝜃 = 11.31°", " 𝜃 = 10.31° ", " 𝜃 = 12.31° ", " 𝜃 = 13.31° "],
    answer: 0,
  },
  {
    question_num: "14",
    question: "Find the gradient of a line whose equation is 5𝑥 + 2𝑦 − 3 = 0",
    options: ["5/2", "-5/2", " Q(2,2)", " Q(-2, 0)"],
    answer: 1,
  },
  {
    question_num: "15",
    question: "The 5th term and 13th terms of an AP are 16 and 40. Find the first term and the common difference",
    options: ["4 and 3", " 3 and 4", "16 and 40", " 4 and 2"],
    answer: 0,
  },
  {
    question_num: "16",
    question: "Given the G.P 4, 16, 64. … find the sum of the first 5th term of the series",
    options: [" 1,634", "1,364", "1,463", "364"],
    answer: 1,
  },
  {
    question_num: "17",
    question: "Divide the sum of the values of 3!, 4!, 5!, 𝑎𝑛𝑑 6! By 10",
    options: [" 178", "817", "807", "87"],
    answer: 3,
  },
  {
    question_num: "18",
    question: "Find the value of 9P9 / 10P3",
    options: [" 1504", "11", "315", "504"],
    answer: 3,
  },
  {
    question_num: "19",
    question: "In how many ways can I choose two red balls and three black balls from a bag containing five red and six black balls? ",
    options: [" 200", "213", "300", "2400"],
    answer: 0,
  },
  {
    question_num: "20",
    question: "Evaluate (9C6 x 7C3) / (4C2 x 8C4)",
    options: ["3", "21", "49", "7"],
    answer: 3,
  },
  {
    question_num: "21",
    question: "A man has five flags. In how many ways can he fly them one above the other?",
    options: ["210", "12", "120", "326"],
    answer: 2,
  },
  {
    question_num: "22",
    question: "If L1 be the line through the points (-3, 4) and (2, 6) and L2 the line through the points (1, -2) and (-1, 3), the slopes of the two lines are ",
    options: ["2/5 and -5/2", "-2/5 and -5/2", " -2/5 and 5/2"],
    answer: 0,
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
  let isAnswered = false;
  for (const inputs of input_state) {
    if(inputs.checked){
      answers[qIndex] = inputs.getAttribute('result');
      isAnswered = true;
    }
    console.log(inputs.checked)
  }
  console.log({isAnswered})
  if(!isAnswered){
    document.querySelector(`#status${qIndex}`).classList.add("wrong");
  }else{
    document.querySelector(`#status${qIndex}`).classList.remove("wrong");
    document.querySelector(`#status${qIndex}`).classList.add("running");
  }
  
  qIndex++
  if (currentQuestion.answer == answers[qIndex-1]) {
    score++;
  }
  if(qIndex >= array_of_questions.length) return finish();
  // time += duration;
  renderQuestion();
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
  welcome_page.style.display = "block";
  welcome_text.style.display = "flex";
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
  quiz_status.style.display = 'none'
  var percentageScore = score/array_of_questions.length * 100;
  var determine_percentage = percentageScore >= passMark;
  var cater_decimal = percentageScore.toString().indexOf('.') != -1 ? percentageScore.toFixed(2): percentageScore ;
  var determine_fail = percentageScore < failMark;
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
  time = 0;
  score = 0;
}