const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610
  }

//   Alıştırma
//   Aşağıdaki kod satırlarını Template Strings yazımına göre düzenleyiniz.

//   "<tbody>"+
//   "<tr>"+
//     "<td>"+"Kitap"+"</td>"+
//     "<td>"+kitap.ad+"</td>"+
//   "</tr>"+
// "<tr>"+
//     "<td>"+"Yazar"+"</td>"+
//     "<td>"+kitap.yazar+"</td>"+
//   "</tr>"+
//     "<tr>"+
//     "<td>"+"Tarih"+"</td>"+
//     "<td>"+kitap.tarih+"</td>"+
//   "</tr>"+
// " </tbody>"+

  const bookTable = 
  `<table border>
    <tbody>
        <tr>
            <td> kitap</td>
            <td>${kitap.ad}</td>
        </tr>
        <tr>
            <td>yazar</td>
            <td>${kitap.yazar}</td>        
        </tr>
        <tr>
            <td>tarih </td>        
            <td>${kitap.tarih} </td>
    </tbody>

  </table border>`

  

  document.body.innerHTML = bookTable
  