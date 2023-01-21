var num = prompt("I want: add, sub, mult, div");

let x = +prompt("Enter number 1");
let y = +prompt("Enter number 2");

switch (num) {
  case "add":
    console.log(x, "\u002b", y, "\u003d", x + y);
    break;
  case "sub":
    console.log(x, "\u2212", y, "\u003d", x - y);
    break;
  case "mult":
    console.log(x, "\u00D7", y, "\u003d", x * y);
    break;
  case "div":
    console.log(x, "\u00F7", y, "\u003d", x / y);
    break;
  default:
    console.log("It\u0060s not operation");
}
