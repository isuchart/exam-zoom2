//api sheety เพิ่มข้อมูลลงใน sheet แยก tab ตามห้อง
function addDataToSheet() {
  let conf = {
    calendar: "buddhist", // buddhist, iso8601
    dateStyle: "long", // full, long, medium, short
  };
  let dd = new Date();
  let myDate = dd.toLocaleString("th-TH", conf);

  let conf2 = {
    calendar: "buddhist", // buddhist, iso8601
    timeStyle: "medium", // full, long, medium, short
  };
  let tt = new Date();
  let milliSecTime = tt.getMilliseconds(); // มิลลิวินาที
  let myTime = tt.toLocaleString("th-TH", conf2);
  let timeTest = myTime + ":" + milliSecTime;

  // เพิ่มข้อมูลลงฐานข้อมูล sheet
  var storedData = localStorage.getItem("user");
  var stdData = JSON.parse(storedData);
  console.log(stdData);

  let tabRoom = stdData.room;
  let scoreAvg = numDec(stdData.avgScore, 2);
  let url;
  switch (tabRoom) {
    case "ม.4/8":
      {
        url =
          "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662M4Sheety/eight";

        fetch(url)
          .then((response) => response.json())
          .then((json) => {
            // Do something with the data
            json.data.map((val) => {
            //   // console.log(val.name,val.surname,val.score,val.add)
            //   // $showData.append(`<tr><td>${val.name}</td><td>${val.surname}</td><td>${val.userid}</td><td>${val.salary}</td><td>${val.position}</td></tr>`)
            //   $showData.append(
            //     `<tr><td>${val.id}</td><td>${val.firstname}</td><td>${val.lastname}</td><td>${val.age}</td><td>${val.position}</td></tr>`
            //   );
            // });
            // console.log(json.data);
            console.log(json.eights);
            // return json.data
          });
          })

        var body = {
          eight: {
            date: myDate,
            time: timeTest,
            lineId: `${liff.getDecodedIDToken().sub}`,
            lineName: `${liff.getDecodedIDToken().name}`,
            room: `${stdData.room}`,
            no: `${stdData.no}`,
            stdid: `${stdData.stdid}`,
            prename: `${stdData.prename}`,
            fname: `${stdData.fname}`,
            sname: `${stdData.sname}`,
            subject: `${subjectNow}`,
            // score: `${score}`,
            scoreMax: `${stdData.maxScore}`,
            scoreMin: `${stdData.minScore}`,
            scoreAvg: numDec(scoreAvg, 2),
            timeCount: `${stdData.timeCount}`,
          },
        };
      }
      break;

    case "ม.4/10":
      {
        url =
          "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662M4Sheety/ten";
        var body = {
          ten: {
            date: myDate,
            time: timeTest,
            lineId: `${liff.getDecodedIDToken().sub}`,
            lineName: `${liff.getDecodedIDToken().name}`,
            room: `${stdData.room}`,
            no: `${stdData.no}`,
            stdid: `${stdData.stdid}`,
            prename: `${stdData.prename}`,
            fname: `${stdData.fname}`,
            sname: `${stdData.sname}`,
            subject: `${subjectNow}`,
            // score: `${score}`,
            scoreMax: `${stdData.maxScore}`,
            scoreMin: `${stdData.minScore}`,
            scoreAvg: numDec(scoreAvg, 2),
            timeCount: `${stdData.timeCount}`,
          },
        };
      }
      break;

    default:
      url =
        "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662M4Sheety/data";
      var body = {
        datum: {
          date: myDate,
          time: timeTest,
          lineId: `${liff.getDecodedIDToken().sub}`,
          lineName: `${liff.getDecodedIDToken().name}`,
          room: `${stdData.room}`,
          no: `${stdData.no}`,
          stdid: `${stdData.stdid}`,
          prename: `${stdData.prename}`,
          fname: `${stdData.fname}`,
          sname: `${stdData.sname}`,
          subject: `${subjectNow}`,
          // score: `${score}`,
          scoreMax: `${stdData.maxScore}`,
          scoreMin: `${stdData.minScore}`,
          scoreAvg: numDec(scoreAvg, 2),
          timeCount: `${stdData.timeCount}`,
        },
      };
  }

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // เพิ่ม header สำหรับระบุประเภทข้อมูลเป็น JSON
    },
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something with object
      console.log(json.datum); // เปลี่ยนเป็น json.datum แทน body.datum
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}
