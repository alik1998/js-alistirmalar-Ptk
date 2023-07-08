 //ıf else li proje yap

 
 //console.log(typeof 42);

// console.log(typeof "ali");

// console.log(typeof true );

// console.log(typeof(veriable));

// let result = 5;


// aşağıda tamsayı olup olmadığını öğrenmek için number.isInteger() metodu uygulanır
//console.log(Number.isInteger(5)); //true
//console.log(Number.isInteger(-5)); //true
//console.log(Number.isInteger(0.5)); //false

//isFinite () yöntemi, bir değerin sonlu bir sayı olup olmadığını belirler.
//console.log(Number.isFinite(10)) //true
// console.log(Number.isFinite("123")) //false
// console.log(Number.isFinite("hello")) //false
// console.log(Number.isFinite(-Infinity)) //false
// console.log(Number.isFinite(0 / 0)) //false

// Number.isNaN () yöntemi, bir değerin NaN (Not-A-Number) olup olmadığını belirler. nan ise > true ... nan deilse > false değer alır.

// "Number.isNaN()" fonksiyonu, belirtilen değerin "NaN" (Not-a-Number) değeri olup olmadığını kontrol eder.
// "NaN", matematiksel olarak tanımlanamayan veya geçersiz bir sayısal işlem sonucunda oluşan bir değerdir.

// "Number.isNaN()" fonksiyonu, true veya false değeri döndürür. True değeri, belirtilen değerin "NaN" olduğunu
//  gösterirken, false değeri, belirtilen değerin "NaN" olmadığını gösterir.
console.log(Number.isNaN(123));
 //false
console.log(Number.isNaN(0));
 //false
console.log(Number.isNaN('123'));
 //false
console.log(Number.isNaN('Hello'));
 //false
console.log(Number.isNaN(''));
 //false
console.log(Number.isNaN(true));
 //false
console.log(Number.isNaN(undefined));
 //false
console.log(Number.isNaN('NaN'));
 //false
console.log(Number.isNaN(NaN));
 //true


