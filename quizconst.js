const quizdata = []
let tempData = {}

let ii = 0 // เริ่มต้นที่ 0 แทนที่จะเริ่มที่ 1
// let iiEnd = 43
let iiEnd = ex.length
do {
   // console.log(ii);
   for(let j = 0; j <= 3; j++) {
      let tempData;
      if(j == 0) {
         tempData = {
            question: ex[ii],
            a: a[ii],
            b: b[ii],
            c: c[ii],
            d: d[ii],
            correct: "a",
         };
      } else if(j == 1) {
         tempData = {
            question: ex[ii],
            a: b[ii],
            b: a[ii],
            c: c[ii],
            d: d[ii],
            correct: "b",
         };
      } else if(j == 2) {
         tempData = {
            question: ex[ii],
            a: c[ii],
            b: b[ii],
            c: a[ii],
            d: d[ii],
            correct: "c",
         };
      } else {
         tempData = {
            question: ex[ii],
            a: d[ii],
            b: b[ii],
            c: c[ii],
            d: a[ii],
            correct: "d",
         };
      }
      quizdata.push(tempData);
   }
   ii++;
} while (ii < iiEnd); 
console.log(quizdata)
console.log(ex.length)