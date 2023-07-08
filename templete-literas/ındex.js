let ad = "ali";
let soyad = "kurtkovan";
let gözrengi = "kahverengi";
let doğum = "12.02.1998";
let kitap = "sefiller";
let sayfası = "522";

console.log(`benim adım ${ad} soyadım ${soyad}`);

let a = 2;
let b = 25;
console.log(`${a} çarpı ${b} eşittir ${a*b}`)

//html şablonu
// Çok satırlı dizeleri kolaylıkla kullanmak 
//ve dizelerimize içerik eklemek için de Template Literal’den faydalanabiliriz.

let bilgi = `
<h2>beinm adım ${ad} soyadım ${soyad}</h2>
<p>okuduğum kitap ${kitap} sayfası ${sayfası}
`
document.body.innerHTML = bilgi;

