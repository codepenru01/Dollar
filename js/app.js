let num = +prompt("Summani kirting!");

console.log(num);

//ticket $350 =>350*11250  = 3 937 500
//living $680 =>680*11250  = 7 650 000
//tour => c| 230=>230*12864= 2 958 720
// min=3 || max=30

let ticket = 350 * 11250;
let living = 350 * 11250;
let tour = 230 * 12864;

let all = 2 * ticket + living + tour;
console.log("Total:" + all);

let enough = all - num;
console.log("Yetmayotgan" + enough);

let day = Math.floor(Math.random() * (30 - 3 + 1) + 3);
console.log(day);

if (num >= all) {
  document.write("Yaxshi yetib oling");
} else if (num === 0) {
  document.write("Iltimos pul kiriting");
} else if (num < all) {
  document.write(
    `Pulingiz hozircha yetmayapti. Sizga minimal yana ${enough} so'm pul kerak. Iltimos ${day} kundan keyin keling!`
  );
} else document.write("Iltimos pul kiriting!");