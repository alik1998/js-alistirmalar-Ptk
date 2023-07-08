var bugun = new Date();
var gun = bugun.getDay();
let day = document.querySelector(`#name_day`);

switch (gun) {
    case 0:
        day.innerHTML = "pazartesi" + " " + `<br> ${gun} = gün_index_no`  ;
    break;
    case 1:
        day.innerHTML = "sali" + " " + `<br> ${gun} = gün_index_no`;
    break;
    case 2:
        day.innerHTML = "çarsamba" + "" + `<br> ${gun} = gün_index_no`;
    break;
    case 3:
        day.innerHTML = "persembe" + " " + `<br> ${gun} = gün_index_no`;
    break;
    case 4:
        day.innerHTML = "cuma" + " " + `<br> ${gun} = gün_index_no`;
    break;
    case 5:
        day.innerHTML = "cumartesi" + " " + `<br> ${gun} = gün_index_no`;
    break;
    case 6:
        day.innerHTML = "pazar" + " " + `<br> ${gun} = gün_index_no`;
    break;
        
}

