let url = "www.kodluyoruz.org";
let language = "Java";
let language2 = "script";

// Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.

let cevap = `${language}${language2.charAt(0).toUpperCase()}${language2.slice(1)}`
console.log(cevap);

// Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.

console.log(url.indexOf("."));// 3 noktanın indexkonumunu öğrendik;
let domain = url.slice(3+1);//kodluyoruz.org noktanın indexkonumunu 3 ise k den itibaren veriyi alacağız bunun için 3 +1 veya 4 yazacaz
console.log(domain);