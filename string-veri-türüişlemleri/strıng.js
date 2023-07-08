let email = "kodluyoruz@kodluyoruz.org"
let firstName = "javascript"
let lastName = "BOOTCAMP"
//lastname'in kaç adet içeriğe (uzunluk) sahip onu gösterir.
console.log(lastName.length);//8

//String bir ifadenin içerisinde, aradığımız karakterin yerini bulmak için 2 yöntem vardır.

//birinci yöntem

console.log(email.charAt(2));//d
//ikinci yöntem
//console.log(email.[4]);//u
console.log(firstName[0]); //"J"
//bütünharfleri büyük yazdır
firstName = firstName.toUpperCase();
console.log(firstName);

//bütünharfleri küçük yazdır.
// lastName = lastName.toLowerCase();
// console.log(lastName);


//İlk Harfi Büyük Kalan Harfleri Küçük Yapma

yazi = `${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()} `

console.log(yazi);

//İstediğimiz Bilgiyi Aramak- search metodu index numarasını verir

console.log(email.search("@"));// 10

console.log(email.search("adsdas"));//-1 (arattığımız şey yok ise -1 yanıtını alırız)

//search() yerine kullanabileceğimiz başka bir metot ise indexOf() metodudur.
//indexOf() metodu true or false olarak s-çıktı verir.

console.log(email.indexOf("@"));// 10 (search() yerine kullanabileceğimiz başka bir metot ise indexOf() metodudur.)
console.log(email.indexOf("@asd"));// -1

//lastIndexOf- Metin İçinde Arama Yapma
//indexOf ile arasındaki tek fark aranan kelime birden fazla geçiyor ise en son eşleşmeden gelen index numarasını döndürür.
console.log(email.lastIndexOf("z"));// 20 (lastIndexOf)

// Belli Bir Bilgiyi Almak

console.log(email.slice(10)); // @kodluyoruz.org bilgisini almak amacımız

console.log(email.slice(0, 11));//kodluyoruz@ bilgisini almak amacımız (son belirtilen index dahil deildir bu yüzden 10+1=11 yapıldı)

// Bilgiyi Değiştirmek
// email değişkeninde domaini değiştirmek istersek eğer, replace() metodu bize yardımcı olur.

let mail = email.replace("@kodluyoruz.org", "@gmail.com");
console.log(mail); // kodluyoruz@gmail.com


// İstediğim Bilgi Var Mı?
// Aradığımız bilginin değişken içerisinde olup olmadığını kontrol etmek için includes() metodunu kullanırız. true veya false döner.

console.log(email.includes("@"));// true
console.log(email.includes("$"));// false

// Nasıl Başladı Nasıl Bitti?
// Aldığımız veri istediğimiz bilgiyle başladı mı? Veya istediğimiz bilgiyle bitti mi? Bu durumu kontrol etmek için startsWith() ve endsWith() metodunu kullanırız.
 
console.log(email.startsWith("k")); //True
console.log(email.endsWith("g")); //true

console.log(email.startsWith("@")); //false
console.log(email.endsWith("s")); //false