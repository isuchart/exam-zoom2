//แฟคทอเรียล
//ตัวแปรส่วนโครงสร้างข้อสอบ
var ex = []
var  a = []
var  b = []
var  c = []
var  d = []

//ตัวแปรในข้อสอบแต่ละข้อ
var m = []
var n = []
var o = []
var x = []
var y = []
var z = []

//1 `
let i=0
     x[i] = random(3, 9)
    ex[i] = "`"+x[i]+"!` หมายถึงข้อใด"
     a[i] = "`"+nFactDp(x[i])+"`"
     b[i] = "`"+nPlusDp(x[i])+"`"
     c[i] = "`"+nSubDp(x[i])+"`"
     d[i] = "`"+nDivDp(x[i])+"`"

//2 `
i++
   x[i] = random(3, 9)
  ex[i] = "`"+nFactDp(x[i])+"` ตรงกับข้อใด"
   a[i] = "`"+x[i]+"!`"
   b[i] = "`!"+x[i]+"`"
   c[i] = "`"+x[i]+"**`"
   d[i] = "`**"+x[i]+"`"

 //3 `
 i++
  x[i] = random(4, 9)
  // x[i]==3?x[i]=0:x[i]+=0
  ex[i] = "`"+x[i]+"!` มีค่าเท่ากับข้อใด"
   a[i] = "`"+factorial(x[i]).toLocaleString()+"`"
   b[i] = "`"+x[i]*100+"`"
   c[i] = "`"+factPlus(x[i]).toLocaleString()+"`"
   d[i] = "`"+(x[i]*10+1)+"`"

 //4 `
 i++
  x[i] = random(0, 9)
  ex[i] = "ถ้า `n! = "+factorial(x[i]).toLocaleString()+"` แล้ว `n`  มีค่าเท่าไร"
   a[i] = "`"+x[i]+"`"
   b[i] = "`"+(x[i]+2)+"`"
   c[i] = "`"+(x[i]+3)+"`"
   d[i] = "`"+(x[i]+4)+"`"

 //5 `
 i++
  m[i] = random(2, 4)
  n[i] = random(6, 20)
  ex[i] = "`("+n[i]+"!)/("+(n[i]-m[i])+"!)` ตรงกับข้อใด"
   a[i] = "`"+mnFactDp(n[i],n[i]-m[i],"xx")+"`"
   b[i] = "`"+mnFactDp(n[i],n[i]-m[i],"+")+"`"
   c[i] = "`"+mnFactDp(n[i],n[i]-m[i],"xx")+"!`"
   d[i] = "`"+mnFactDp(n[i],n[i]-m[i],"xx")+"xx"+(n[i]-m[i])+"`"

  //6
  i++
    n[i] = random(6, 10)
    ex[i]= "`"+mnFactDp(n[i],0,"xx")+"` มีค่าเท่ากับข้อใด"
    a[i]= "`"+nFact(n[i]).toLocaleString()+"\\ `"
    b[i]= "`"+(n[i]*(n[i]-1)).toLocaleString()+"\\ `"
    c[i]= "`"+(n[i]*(n[i]-1)*(n[i]-2)).toLocaleString()+"\\ `"
    d[i]= "`"+(n[i]*(n[i]-1)*(n[i]-2)*(n[i]-3)).toLocaleString()+"\\ `"
  
  //7 `
  i++
    m[i] = random(10, 20)
    n[i] = random(3, 6)
    let r = m[i]-n[i]
    ex[i]= "`("+m[i]+"!)/("+r+"!)` ตรงกับข้อใด"
    a[i]= "`("+mnFactDp(m[i],r,'xx')+"xx"+r+"!)/("+r+"!)`"
    b[i]= "`(("+mnFactDp(m[i],r,'xx')+")/("+r+"))!`"
    c[i]= "`(("+m[i]+")/("+r+ "))!\\ `"
    d[i]= "`("+m[i]+")/("+r+ ")\\ `"
  
  //8 `
  i++
    m[i] = random(10, 20)
    n[i] = random(3, 6)
    let r = m[i]-n[i]
    ex[i]= "`("+m[i]+"!)/("+r+"!)` ตรงกับข้อใด"
    a[i]= "`"+mnFactDp(m[i],r,'xx')+"`"
    b[i]= "`"+mnFactDp(m[i],r,'xx')+"!`"
    c[i]= "`"+mnFactDp(m[i],r-1,'xx')+"`"
    d[i]= "`"+mnFactDp(m[i],r-1,'xx')+"!`"
  
  //9 `
  i++
    m[i] = random(10, 17)
    n[i] = random(5, 8)
    let r = m[i]-n[i]
    ex[i]= "`("+m[i]+"!)/("+r+"!)` มีค่าเท่ากับ"
    a[i]= "`"+mnFact(m[i],r).toLocaleString()+"\\ `"
    b[i]= "`"+mnFact(m[i],r-1).toLocaleString()+"\\ `"
    c[i]= "`"+mnFact(m[i],r+1).toLocaleString()+"\\ `"
    d[i]= "`"+mnFact(m[i],r+2).toLocaleString()+"\\ `"
  
  //10 `
  i++
    m[i] = random(15, 20)
    n[i] = random(10, 14)
    o[i] = random(2, 9)
    ex[i]= "จงหาค่าของ `("+m[i]+"!)/("+n[i]+"!"+o[i]+"!)`"
    a[i]= "`("+mnFactDp(m[i],n[i],'xx')+" xx "+n[i]+"!)/("+n[i]+"!xx"+mnFactDp(o[i],0,'xx')+") `"
    b[i]= "`("+mnFactDp(m[i],n[i],'xx')+" xx "+n[i]+"!)/("+n[i]+"xx"+mnFactDp(o[i],0,'xx')+") `"
    c[i]= "`("+mnFactDp(m[i],n[i],'xx')+" xx "+n[i]+")/("+n[i]+"!xx"+mnFactDp(o[i],0,'xx')+") `"
    d[i]= "`("+mnFactDp(m[i],n[i],'xx')+")/("+n[i]+"xx"+mnFactDp(o[i],0,'xx')+") `"
  
  //11 `
  i++
    m[i] = random(15, 20)
    n[i] = random(9, 14)
    ex[i]= "ข้อใดเท่ากับ `"+m[i]+"!`"
    a[i]= "`"+mnFactDp(m[i],m[i]-n[i],'xx')+"! `"
    b[i]= "`"+mnFactDp(m[i],m[i]-n[i],'xx')+" `"
    c[i]= "`"+mnFactDp(m[i],m[i]-n[i],'+')+"! `"
    d[i]= "`"+mnFactDp(m[i],m[i]-n[i],'+')+" `"
  
  //12 `
  i++
    m[i] = random(10, 20)
    n[i] = random(2, 5)
    ex[i]= "ข้อใดเท่ากับ `"+mnFactDp(m[i],m[i]-n[i],'xx')+"`"
    a[i]= "`("+m[i]+"!)/("+(m[i]-n[i])+"!)`"
    b[i]= "`(("+m[i]+")/("+(m[i]-n[i])+"))!`"
    c[i]= "`("+m[i]+"-"+(m[i]-n[i])+")!`"
    d[i]= "`"+m[i]+"!-"+(m[i]-n[i])+"!`"

  //13 `
  i++
    m[i] = random(9, 20)
    ex[i]= "ถ้า `(n!)/((n-2)!)="+mnFactVal(m[i],m[i]-1).toLocaleString()+"` จงหาค่า `n`"
    a[i]= "`"+m[i]+"`"
    b[i]= "`"+(m[i]+1)+"`"
    c[i]= "`"+(m[i]-1)+"`"
    d[i]= "`"+(m[i]-2)+"`"
  
  //14 `
  i++
    m[i] = random(9, 20)
    ex[i]= "ถ้า `(n!)/((n-3)!)="+mnFactVal(m[i],m[i]-2).toLocaleString()+"` จงหาค่า `n`"
    a[i]= "`"+m[i]+"`"
    b[i]= "`"+(m[i]+1)+"`"
    c[i]= "`"+(m[i]-1)+"`"
    d[i]= "`"+(m[i]-2)+"`"
  
  //15 `
  i++
    m[i] = random(9, 20)
    ex[i]= "ถ้า `n! ="+mnFactVal(m[i],m[i]-1).toLocaleString()+"(n-2)!` จงหาค่า `n`"
    a[i]= "`"+m[i]+"`"
    b[i]= "`"+(m[i]+1)+"`"
    c[i]= "`"+(m[i]-1)+"`"
    d[i]= "`"+(m[i]-2)+"`"
  
  //16 `
  i++
    m[i] = random(7, 15)
    ex[i]= "ถ้า `n! ="+mnFactVal(m[i],m[i]-2).toLocaleString()+"(n-3)!` จงหาค่า `n`"
    a[i]= "`"+m[i]+"`"
    b[i]= "`"+(m[i]+1)+"`"
    c[i]= "`"+(m[i]-1)+"`"
    d[i]= "`"+(m[i]-2)+"`"
  

// function random(min,max){
// 	return Math.floor(Math.random()*(max-min+1)+min);
// }
