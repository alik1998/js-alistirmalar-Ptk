var n = prompt("tamsayı girin");

// "n" tek sayı ise "Weird" yazdırılacaktır.
if (n % 2 == 1) {
  console.log("wired");
}


else if (n % 2 == 0 && n > 2 && n < 5) {
  console.log("Not Weird");
}

else if (n % 2 == 0 && n > 6 && n < 20) {
  console.log("Not Weird");
}

else if (n % 2 == 0 && n > 20) {
  console.log("Not Weird");
}
