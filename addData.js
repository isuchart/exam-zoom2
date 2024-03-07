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
            json.eight.map((val) => {
              if (val.stdid == stdData.stdid) {
                // if(val.stdid=="88889"){
                if (
                  parseInt(val.scoreMax) < stdData.score ||
                  parseInt(val.scoreMin) > stdData.score
                ) {
                  console.log(val.id, val.stdid, val.room, val.scoreMax,val.scoreMin,stdData.score);
                  let url3 =
                    "https://api.sheety.co/2fb80a9f78e03a86a9c645b99d92db92/score662M4Sheety/eight/"+val.id
                    console.log(url3)

                  fetch(url3, {
                    method: "PUT",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    // body: JSON.stringify(body),
                    body: JSON.stringify({ eight: body }),
                  })
                    .then((response) => {
                      if (!response.ok) {
                        throw new Error("Network response was not ok");
                      }
                      return response.json();
                    })
                    .then((json) => {
                      // Do something with object
                      console.log(json.eight);
                      // console.log(response.json());
                    })
                    .catch((error) => {
                      console.error(
                        "There was a problem with the fetch operation:",
                        error
                      );
                    });
                }
              }
              // else {
              //   fetch(url, {
              //     method: "POST",
              //     headers: {
              //       "Content-Type": "application/json", // เพิ่ม header สำหรับระบุประเภทข้อมูลเป็น JSON
              //     },
              //     body: JSON.stringify(body),
              //   })
              //     .then((response) => response.json())
              //     .then((json) => {
              //       // Do something with object
              //       // console.log(json.datum); // เปลี่ยนเป็น json.datum แทน body.datum
              //     })
              //     .catch((error) => {
              //       console.error("Error:", error);
              //     });
              //     break
              // }
              
              // return json.data
            });
            console.log(json.eight);
          });

        // var body = {
        //   eight: {
        //     date: myDate,
        //     time: timeTest,
        //     lineId: `${liff.getDecodedIDToken().sub}`,
        //     lineName: `${liff.getDecodedIDToken().name}`,
        //     room: `${stdData.room}`,
        //     no: `${stdData.no}`,
        //     stdid: `${stdData.stdid}`,
        //     prename: `${stdData.prename}`,
        //     fname: `${stdData.fname}`,
        //     sname: `${stdData.sname}`,
        //     subject: `${subjectNow}`,
        //     // score: `${score}`,
        //     scoreMax: `${stdData.maxScore}`,
        //     scoreMin: `${stdData.minScore}`,
        //     scoreAvg: numDec(scoreAvg, 2),
        //     timeCount: `${stdData.timeCount}`,
        //   },
        // };
      }

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

  // fetch(url, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json", // เพิ่ม header สำหรับระบุประเภทข้อมูลเป็น JSON
  //   },
  //   body: JSON.stringify(body),
  // })
  //   .then((response) => response.json())
  //   .then((json) => {
  //     // Do something with object
  //     // console.log(json.datum); // เปลี่ยนเป็น json.datum แทน body.datum
  //   })
  //   .catch((error) => {
  //     console.error("Error:", error);
  //   });
}
