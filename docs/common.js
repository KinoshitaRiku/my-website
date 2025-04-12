/**
 * 時計の更新関数
 */
function updateClock() {
  const now = new Date();

  // 時間を取得
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  // 日付を取得
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  // 曜日を取得
  const weekdays = ["日", "月", "火", "水", "木", "金", "土"];
  const weekday = weekdays[now.getDay()];

  // 時間と日付を表示（要素がある場合のみ）
  const timeElement = document.getElementById("time");
  if (timeElement) {
    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
  }

  const dateElement = document.getElementById("date");
  if (dateElement) {
    dateElement.textContent = `${year}年${month}月${day}日(${weekday})`;
  }

  return {
    time: `${hours}:${minutes}:${seconds}`,
    date: `${year}年${month}月${day}日(${weekday})`,
    hours,
    minutes,
    seconds,
    year,
    month,
    day,
    weekday,
  };
}

/**
 * 表示テキストを更新する関数
 */
function updateDisplayText(inputId, displayId, defaultText) {
  const input = document.getElementById(inputId).value;
  document.getElementById(displayId).textContent = input || defaultText;
}

/**
 * 要素の表示/非表示を切り替える関数
 */
function toggleElementVisibility(elementId) {
  const element = document.getElementById(elementId);
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

/**
 * ページ読み込み時に時計を開始する
 */
function startClock() {
  if (document.getElementById("time")) {
    updateClock();
    setInterval(updateClock, 1000);
  }
}
