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
document.getElementById("confirm-send").addEventListener("click", function () {
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
});

// 「キャンセル」ボタンがクリックされたとき
document.getElementById("cancel-send").addEventListener("click", function () {
  // 確認画面を閉じる
  document.getElementById("confirmation-modal").style.display = "none";
});
