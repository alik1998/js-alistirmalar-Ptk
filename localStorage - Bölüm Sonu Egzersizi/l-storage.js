//Fonksiyonlar - Bölüm Sonu Egzersizi

let counter = localStorage.getItem('counter') ? Number(localStorage.getItem('counter'))  : 0;
let counterDOM = document.querySelector("#counter");
let increaseDOM = document.querySelector("#increase"); //artı
let decreaseDOM = document.querySelector("#decrease"); //eksi

counterDOM.innerHTML = counter;

//etkileşimler
increaseDOM.addEventListener("click", clickEvent )
decreaseDOM.addEventListener("click", clickEvent)

//fonksiyonlar - Bölümü
function clickEvent() {
    console.log(typeof(counter));
    console.log(this.id)   
    this.id == "increase" ? counterDOM.innerHTML = counter += 1 : counterDOM.innerHTML = counter -= 1;
    localStorage.setItem("counter", counter);
    counterDOM.innerHTML = counter;
}    
    
    

    
    
