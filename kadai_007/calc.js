// 1以上の正の数を代入
let num = 15;

// 条件分岐（if文）
if (num % 3 === 0 && num % 5 === 0) {
    // 3と5の両方の倍数の場合
    console.log("3と5の倍数です");
} else if (num % 3 === 0) {
    // 3の倍数の場合
    console.log("3の倍数です");
} else if (num % 5 === 0) {
    // 5の倍数の場合
    console.log("5の倍数です");
} else {
    // それ以外の場合（数値そのものを出力）
    console.log(num);
}