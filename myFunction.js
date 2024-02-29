// สุ่มตัวเลข
function random(min,max){
	return Math.floor(Math.random()*(max-min+1)+min);
}

// ห.ร.ม.
function gcd(t01,t02){
	let t1 = Math.abs(t01);
	let t2 = Math.abs(t02);
    do{
        m=Math.max(t1,t2);
        n=Math.min(t1,t2);
        k=m%n;
        t1=n;
        t2=k;
    }while(k>0);
    return n;
}

function findGCD(a, b) {
  while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
  }
  return a;
}

function findLCM(a, b) {
  return (a * b) / findGCD(a, b);
}

// Permutation เรียงสับเปลี่ยน
function Pnr(n,r){
    let pp=1;
    for(p=n;p>=n-r+1;p--){
        pp=pp*p
    }
    return pp
}

function Cnr(n,r){
    let pp=1;
    for(p=n;p>=n-r+1;p--){
        pp=pp*p
    }
    return pp/nFact(r)
}

// หาค่า n!
function nFact(n){
    let pp=1;
    for(p=n;p>=1;p--){
        pp=pp*p
    }
    return pp
}

// หาค่า n!
function mnFact(m,n){
    let pp=1;
    for(p=m;p>n;p--){
        pp=pp*p
    }
    return pp
}

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

function factPlus(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n + factPlus(n - 1);
}

// แจกแจง n!
function nFactDp(n){
    // console.log(n);
    let nf = ""+n
    for(let i = --n; i>=1; i-- ){
        nf += "xx"+i
    }
    return nf
}

// แจกแจง m!/n!
function mnFactDp(m,n,s){
    let nf = ""+m
    for(let i = --m; i>n; i-- ){
        nf += s+i
    }
    return nf
}

// ค่า n(n-1)(n-2)...
function mnFactVal(m,n){
    let nVal = m
    for(let i = --m; i>=n; i--){
        nVal = nVal*i
    }
    return nVal
}

// แจกแจง + (เอาไว้สร้างตัวลวง)
function nPlusDp(n){
    let nf = ""+n
    for(let i = --n; i>=1; i-- ){
        nf += "+"+i
    }
    return nf
}

// แจกแจง - (เอาไว้สร้างตัวลวง)
function nSubDp(n){
    // console.log(n);
    let nf = ""+n
    for(let i = --n; i>=1; i-- ){
        nf += "-"+i
    }
    return nf
}

// แจกแจง หาร (เอาไว้สร้างตัวลวง)
function nDivDp(n){
    // console.log(n);
    let nf = ""+n
    for(let i = --n; i>=1; i-- ){
        nf += "-:"+i
    }
    return nf
}

// n..1
// n คือ จำนวนต้องการ t คือเครืองหมาย อยู่ใน ""
function nAllDp(n,t){
    console.log(n);
    let nf = ""+n
    for(let i = --n; i>=1; i-- ){
        nf += t+i
    }
    return nf
}

// 1..n
// n คือ จำนวนต้องการ t คือเครืองหมาย อยู่ใน ""
function numAllDp(n,t){
    console.log(n);
    let nf = ""+1
    for(let i = 2; i<=n; i++ ){
        nf += t+i
    }
    return nf
}

//แจกแจง เลขยกกำลัง
function myExp(a,n){
    let exp1 = ""+a
    if(a<0){
        a = "("+a+")"
    }
    exp1 = ""+a
    for(let i=1; i<n; i++){
        exp1 = exp1+"xx"+a
    }
    return exp1
}

// สร้าง set n=จำนวนสมาชิก(จะไม่แน่นอนเพราะตัดตัวที่ซ้ำออก)
// a = สมาชิกตัวเริ่มต้น  , b = สมาชิกตัวสุดท้าย
// return ค่าเป็น array ต้องไปใส {} เอาเอง
function createSet(n,a,b){
  let nSet = n
  let startSet = a
  let endSet = b
  let setTemp = []
  for(let i=1; i<=nSet; i++){
      setTemp.push(random(startSet, endSet))
  }
  let setTemp2 = _.uniq(setTemp)
  setTemp2.sort((a, b) => a - b)
  // let setTemp3 = "{"+ _.join(setTemp2 , ', ')+"}"
  return setTemp2
}

// สร้างเส้นระบุเป็นจำนวนจุด
function createLine(point){
    let p = point
    let line = ""
    for(let i=1; i<=p; i++){
        line += "."
    }
    return line
  }
// สร้างเว้นวรรค
  function space(n){
    let sp = "&nbsp"
    for(let i=1; i<=n; i++){
         sp += "&nbsp"
    }
    return sp
  }

//reset เลขที่
  function resetPageNo(){
    let no = prompt()
    no--
    localStorage.setItem('pageNo', no);
    newExamData()
    // location.reload();
  }

//สุ่มหาจำนวนเฉพาะ
  function isPrime(number) {
    if (number <= 1) {
      return false;
    }
    
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    
    return true;
  }
  function genRanPrime(min, max) {
    while (true) {
      const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      if (isPrime(randomNumber)) {
        return randomNumber;
      }
    }
  }

//ตรวจสอบว่าถอดรูทสองลงตัวหรือไม่
  function chkSqrt(num) {
    var sqrt = Math.sqrt(num);
    return sqrt % 1 === 0;
  }

  function notSqrt(mm){
    if(chkSqrt(mm) == false){
        return mm
    }else{
        mm=random(2, 20)
        // console.log(mm)
        notSqrt(mm)
    }
  }

  //ตรวจสอบตัวเลข t=1:อยู่หน้าตัวแปร a , t=2:เลขโดด
  function txt_n(n,t){
    let txt_n
    if(t==1){
      if(n==1){
        txt_n = ""
      }else if(n==-1){
        txt_n = "-"
      }else{
        txt_n = n
      }
    }else{
      if(n==1){
        txt_n = "1"
      }else if(n==-1){
        txt_n = "-1"
      }else if(n==0){
        txt_n = ""
      }else{
        txt_n = n
      }
    }
    return txt_n
  }

   //เครื่องหมายหน้าตัวเลข t=1:อยู่หน้าตัวแปร a , t=2:เลขโดด
  function op_n(n,t){
    let op
    // return n<0 ? op="" : op="+"
    if(t==1){
      if(n>0){
          op=""
      }else{
          op="-"
      }
    }else {
      if(n>0){
        op="+"
      }else{
        op=""
      }
    }
    return op
  }

//กำหนดทศนิยม 2 ทศนิยม
  function numTwoDecimals(number) {
    const formattedNumber = number.toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
    return formattedNumber;
  }

//หาร ได้ทั้งเศษ และส่วน
function divide(dividend, divisor) {
  // หารเอาแต่ผลลัพธ์
  var quotient = Math.floor(dividend / divisor);

  // คำนวณเศษ
  var remainder = dividend % divisor;

  // สร้าง Object เพื่อเก็บผลลัพธ์
  var result = {
    quotient: quotient,
    remainder: remainder
  };

  return result;
}
