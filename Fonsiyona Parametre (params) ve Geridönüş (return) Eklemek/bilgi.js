let firstName = "lorem";

function greetings(firstName="", lastName="") {// default parametre alıyor..
    // console.log(`Merhaba ${firstname ? firstname : ""}`)
    console.log(`Merhaba ${firstName}`)
    console.log(`Merhaba ${firstName} ${lastName}`)   
};

console.log(firstName) //değişken
greetings(); // fonksiyona parametre gondermedik ??
greetings("parametre");

function greetings2(firstName,lastName) {
    let info = `Merhaba ${firstName} ${lastName}`
    return info 
}

let greetingsInfo = greetings2("Ad", "Soyad");
// let info = "deneme"; // ??????
// console.log(info);

function domIdWriteInfo(id, info) {
    let domObject = document.querySelector(`#${id}`);
    domObject.innerHTML = info
};

let htmlInfo = `<span style="color:red">Color REDDDDD</span>`

domIdWriteInfo('greeting', htmlInfo);
domIdWriteInfo('info', greetings2("lorem", "ipsum"));