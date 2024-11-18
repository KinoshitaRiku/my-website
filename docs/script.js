document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // バリデーションチェック
    if (name && email && subject && message) {
      // 確認画面に入力内容を表示
      document.getElementById("confirm-name").textContent = name;
      document.getElementById("confirm-email").textContent = email;
      document.getElementById("confirm-subject").textContent = subject;
      document.getElementById("confirm-message").innerHTML = message.replace(
        /\n/g,
        "<br>"
      );

      // 確認画面を表示
      document.getElementById("confirmation-modal").style.display = "flex";
    } else {
      alert("全てのフィールドを入力してください。");
    }
  });

// 「送信する」ボタンがクリックされたとき
document
  .getElementById("confirm-send")
  .addEventListener("click", async function () {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Google Formsの送信URLを設定
    const googleFormsURL =
      "https://docs.google.com/forms/u/0/d/e/1FAIpQLSdLmwxlbn49Nv5rjpK4zZP_Ww0T2DfXfLe7RKOuu1wmKu8Uww/formResponse";

    // フォームデータの作成
    const formData = new FormData();
    formData.append("entry.1719115592", name);
    formData.append("entry.1911298948", email);
    formData.append("entry.2110148079", subject);
    formData.append("entry.1014201555", message);

    try {
      // Google Formsに送信
      const response = await fetch(googleFormsURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      // 送信成功時の処理
      const responseMessage = document.getElementById("response-message");
      responseMessage.textContent = "メッセージが送信されました。";
      responseMessage.style.color = "#333";
      responseMessage.style.opacity = "1";

      // フォームのリセット
      document.getElementById("contact-form").reset();

      // 確認画面を閉じる
      document.getElementById("confirmation-modal").style.display = "none";

      // メッセージを数秒後にフェードアウト
      setTimeout(() => {
        responseMessage.style.opacity = "0";
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
      alert("送信に失敗しました。もう一度お試しください。");
    }
  });

// 「キャンセル」ボタンがクリックされたとき
document.getElementById("cancel-send").addEventListener("click", function () {
  // 確認画面を閉じる
  document.getElementById("confirmation-modal").style.display = "none";
});

// ハンバーガーメニューの制御
const menuBtn = document.getElementById("menuBtn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  nav.classList.toggle("active");
});

// メニューリンクをクリックしたときにメニューを閉じる
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
  });
});

// 画面外をクリックしたときにメニューを閉じる
document.addEventListener("click", (e) => {
  if (!nav.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove("active");
    nav.classList.remove("active");
  }
});
