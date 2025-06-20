// if文

let score = 80;

if (score >= 70) {
  console.log("合格!");
}

// else節

let score2 = 60;

if (score2 >= 70) {
  Console.log("合格!");
}else {
    console.log("不合格...");
}

// else if節

let score3 = 85;

if (score3 >= 90) {
  console.log("優秀!!");
}else if (score3 >= 70) {
    console.log("合格!");
}else {
    console.log("不合格...");
}

///// 演習 : 天気による服装アドバイス

function adviseClothing(weather) {
  if (weather === "晴れ") {
     console.log("Tシャツがおすすめ");
  } else if (weather === "雨") {
    cosole.log("傘を忘れずに");
  } else if (weather === "雪") {
    console.log("コートを着ましょう");
  } else {
    console.log("天気の入力が正しくありません");
  }
}

adviseClothings