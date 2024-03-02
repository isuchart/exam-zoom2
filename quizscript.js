//ส่วนข้อสอบ
const quizContainer = document.querySelector(".quiz-container");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

//ปุ่ม
const submitBtn = document.getElementById("submit");
const submit0Btn = document.getElementById("submit0");
const btnInfo = document.getElementById("btnInfo");

//ส่วนกรอกข้อมูลครั้งแรก
var room = $('#room')
var no = $('#no')
var stdid = $('#stdid')
var prename = $('#prename')
var fname = $('#fname')
var sname = $('#sname')

var subjectNow = 'เก็บคะแนนก่อนปลายภาค 2/66'
var nTodo = 5 //กำหนดจำนวนข้อสอบที่จะให้นักเรียนทำ

//ส่วน info แสดงหน้าจอแรก
var stdInfo = $('#stdInfo')
var timeCount = $('#timeCount')
var nowscore = $('#nowScore')
var maxscore = $('#maxScore')
var minscore = $('#minScore')
var avgscore = $('#avgScore')
// var btnInfo = $('#btnInfo') //กำหนดแบบนี้ไม่ได้

//iquiz กำหนดเพื่อไม่ให้ข้อสอบซ้ำ
var iquiz = []
do {
  let num = random(0, quizdata.length);
  if (!iquiz.includes(num)) {
     iquiz.push(num);
   }
   var iquiz2 = [...new Set(iquiz)];
} while (iquiz2.length < nTodo)
// iquiz2.sort()
console.log('iquiz '+iquiz2)
console.log('quizdata.length '+quizdata.length)

//ดึงข้อมูลจาก LocalStorage มาแสดงใน info
var storedData = localStorage.getItem("user");
if (storedData) {
  var stdData = JSON.parse(storedData);
  if (stdData.room == null || stdData.no == "" || stdData.stdid == "" || stdData.prename == null || stdData.fname == "" || stdData.sname == "") {
    $('#login').show()
    $('#info').hide()
  } else {
    stdInfo.val(stdData.prename + stdData.fname + " " + stdData.sname + "  เลขที่ " + stdData.no + "  ห้อง " + stdData.room)
    timeCount.val(stdData.timeCount)
    nowscore.val(stdData.score)
    maxscore.val(stdData.maxScore)
    minscore.val(stdData.minScore)
    avgscore.val(stdData.avgScore)
    // console.log("ข้อมูลถูกโหลดมาจาก Local Storage");
  }
} else {
  $('#info').hide()
  $('#login').show()
  // console.log("ไม่พบข้อมูลใน Local Storage");
}

// let currentQuiz = 0;
// let currentQuiz = random(0, quizdata.length - 1)
// let currentQuiz = quizdata.length - 1
// let currentQuiz = 5
let iqz = 0
let currentQuiz = iquiz2[iqz]
let score = 0;
let count = 1;

loadQuiz();

function loadQuiz() {
  answerEls.forEach(answerEl => answerEl.checked = false)
  const currentQuizData = quizdata[currentQuiz];
  questionEl.innerHTML = count + ". " + currentQuizData.question;
  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizdata[currentQuiz].correct) {
      score++;
    }

    // currentQuiz++;

    currentQuiz = random(0, quizdata.length - 1)

    // if (count < quizdata.length) {
    if (count < nTodo) {
      count++
      loadQuiz();
      MathJax.typesetPromise();
    } else {

      let conf = {
        calendar: 'buddhist', // buddhist, iso8601
        dateStyle: 'long', // full, long, medium, short
      }
      let dd = new Date();
      let myDate = dd.toLocaleString('th-TH', conf)

      let conf2 = {
        calendar: 'buddhist', // buddhist, iso8601
        timeStyle: 'medium', // full, long, medium, short
      }
      let tt = new Date();
      let milliSecTime = tt.getMilliseconds() // มิลลิวินาที
      let myTime = tt.toLocaleString('th-TH', conf2)
      let timeTest = myTime + ":" + milliSecTime

      //ปรับ LocalStorage
      let room = $('#room').val()
      let no = $('#no').val()
      let stdid = $('#stdid').val()
      let prename = $('#prename').val()
      let fname = $('#fname').val()
      let sname = $('#sname').val()

      var storedData = localStorage.getItem("user");
      var stdData = JSON.parse(storedData);

      room = stdData.room
      no = stdData.no
      stdid = stdData.stdid
      prename = stdData.prename
      fname = stdData.fname
      sname = stdData.sname
      let timeCount = stdData.timeCount
      let minScore = stdData.minScore
      let maxScore = stdData.maxScore
      let subject = subjectNow
      let totalScore = stdData.totalscore

      timeCount++
      if (minScore == 0 || score < minScore) { minScore = score }
      if (maxScore == 0 || score > maxScore) { maxScore = score }
      totalScore += score
      let avgScore = totalScore/timeCount
      let nowScore = score 
      let userData = {
        room: room,
        no: no,
        stdid: stdid,
        prename: prename,
        fname: fname,
        sname: sname,
        subject: subjectNow,
        timeCount: timeCount,
        minScore: minScore,
        maxScore: maxScore,
        avgScore: avgScore,
        score: nowScore,
        totalscore: totalScore,
      };

      var jsonString = JSON.stringify(userData);
      localStorage.setItem("user", jsonString);

      console.log("ข้อมูลถูกบันทึกลงใน Local Storage");


      // เพิ่มข้อมูลลงฐานข้อมูล sheet
      addDataToSheet()

      quizContainer.innerHTML = `
      <div class="flex flex-row relative bg-black/50 items-center shadow-xl m-2 ">
       <img class="w-20 rounded-full mx-8 my-4" src="${liff.getDecodedIDToken().picture
        }" alt="avatar">
       <p class="p-5 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${liff.getDecodedIDToken().name
        }</p></div>
        <h2 id="question">คำตอบที่คุณตอบถูกทั้งหมด ${score}/${count} คำถาม</h2>
        <center><button class="px-8 py-6 text-3xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" id="sendmsg">ส่งคำตอบ</button></center>
        <br/>
      `;
      // <button class="px-8 py-6 text-3xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onclick="location.reload()">เริ่มใหม่</button>
      document.getElementById("sendmsg").onclick = () => {
        var msg = [
          {
            type: "flex",
            altText: `คำตอบที่ถูกทั้งหมด ${score}/${count} คำถาม`,
            contents: {
              type: "bubble",
              body: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "box",
                        layout: "vertical",
                        contents: [
                          {
                            type: "image",
                            url: "" + liff.getDecodedIDToken().picture,
                            aspectMode: "cover",
                            size: "full",
                          },
                        ],
                        cornerRadius: "100px",
                        width: "72px",
                        height: "72px",
                      },
                      {
                        type: "box",
                        layout: "vertical",
                        contents: [
                          {
                            type: "text",
                            text: "แบบทดสอบเก็บคะแนน",
                            align: "center",
                            size: "xl",
                            weight: "bold",
                            adjustMode: "shrink-to-fit",
                          },
                          {
                            type: "box",
                            layout: "vertical",
                            contents: [
                              {
                                type: "text",
                                text: "" + liff.getDecodedIDToken().name,
                                wrap: true,
                              },
                            ],
                            spacing: "sm",
                            margin: "md",
                          },
                        ],
                      },
                    ],
                    spacing: "xl",
                    paddingAll: "20px",
                  },
                ],
                paddingAll: "0px",
              },
              footer: {
                type: "box",
                layout: "vertical",
                contents: [
                  {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        text: "คะแนนของคุณคือ",
                        color: "#ffffff",
                        size: "lg",
                        align: "center",
                        adjustMode: "shrink-to-fit",
                      },
                    ],
                    backgroundColor: "#06c755",
                  },
                  {
                    type: "box",
                    layout: "horizontal",
                    contents: [
                      {
                        type: "box",
                        layout: "baseline",
                        contents: [
                          {
                            type: "text",
                            text: " ",
                            size: "xl",
                            weight: "bold",
                            contents: [
                              {
                                type: "span",
                                text: `${score} `,
                                color: "#0069d9",
                                size: "xxl",
                              },
                              {
                                type: "span",
                                text: "/ ",
                                weight: "bold",
                              },
                              {
                                type: "span",
                                text: `${count} คะแนน`,
                              },
                            ],
                            align: "center",
                          },
                        ],
                      },
                    ],
                    paddingAll: "10px",
                  },
                  {
                    type: "separator",
                  },
                  {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "button",
                        action: {
                          type: "uri",
                          label: "เริ่มทำแบบทดสอบใหม่",
                          uri: "https://liff.line.me/2003849504-KrNJbwz1",
                        },
                        height: "sm",
                        style: "primary",
                        color: "#0069d9",
                      },
                    ],
                    paddingAll: "10px",
                    paddingStart: "50px",
                    paddingEnd: "50px",
                  },
                ],
                paddingAll: "0px",
              },
            },
          },
        ];
        Swal.fire(
          "ดำเนินการสำเร็จ",
          "คุณได้ส่งคำตอบเรียบร้อยแล้ว",
          "success"
        ).then((result) => {
          sendText(msg);
        });
      };


    }
  }
});


function sendText(text) {
  if (!liff.isInClient()) {
    shareTargetPicker(text);
  } else {
    sendflex(text);
  }
}
function sendflex(text) {
  liff.sendMessages(text).then(function () {
    liff.closeWindow();
  });
}
function shareTargetPicker(text) {
  liff
    .shareTargetPicker(text)
    .then(function (res) {
      if (res) {
        liff.closeWindow();
      } else {
        // sending message canceled
        console.log("TargetPicker was closed!");
      }
    })
    .catch(function (error) {
      window.alert("Failed to send message " + error);
    });
}

submit0Btn.addEventListener("click", () => {
  $('#login').hide()
  $('#info').hide()
  $('#quiz').show()

  //กำหนด LocalStorage ครั้งแรก
  let room = $('#room').val()
  let no = $('#no').val()
  let stdid = $('#stdid').val()
  let prename = $('#prename').val()
  let fname = $('#fname').val()
  let sname = $('#sname').val()

  let userData = {
    room: room,
    no: no,
    stdid: stdid,
    prename: prename,
    fname: fname,
    sname: sname,
    subject: subjectNow,
    timeCount: 0,
    minScore: 0,
    maxScore: 0,
    score: 0,
    totalScore: 0,
  };

  var jsonString = JSON.stringify(userData);
  localStorage.setItem("user", jsonString);

  console.log("ข้อมูลถูกบันทึกลงใน Local Storage");


})

btnInfo.addEventListener("click", () => {
  $('#info').hide()
  $('#login').hide()
  $('#quiz').show()
})

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
