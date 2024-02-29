var userId = "";

window.onload = function () {
  initializeLiff("2003849504-KrNJbwz1");
};

function initializeLiff(myLiffId) {
  liff
    .init({
      liffId: myLiffId,
    })
    .then(() => {
      if (!liff.isInClient() && !liff.isLoggedIn()) {
        window.alert("กรุณาเข้าสู่ระบบบัญชี LINE ของคุณ");
        liff.login();
      } else {
        liff
          .getProfile()
          .then(function (profile) {
            document.getElementById("profileurl").src = "" + profile.pictureUrl;
            document.getElementById("displaynamefield").textContent =
              "" + profile.displayName + " ตอบแบบทดสอบดังนี้";

            userId = profile.userId;
            if (!liff.isInClient()) {
            }
          })
          .catch(function (error) {
            window.alert("Error getting profile: " + error);
          });
      }
    })
    .catch((err) => {
      document.getElementById("displaynamefield").textContent = err;
    });
}
