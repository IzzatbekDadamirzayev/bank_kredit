
  const    tugma = document.querySelector("#hissobla");
  let foiz;
  
  tugma.addEventListener("click", () => {
    const miqdor = document.querySelector("#qarz").value,
    muddat = document.querySelector("#muddat").value,
    malumot = document.querySelector("#malumot");
    malumot.innerHTML = `<table class="table table-hover" id="malumot">
    <tr scope="col">
        <td>Oy</td>
        <td>Umumiy miqdor</td>
        <td>To'lanadigan summa</td>
        <td>Qolgan summa</td>
    </tr>
</table>`
    
  for ( i = 1; i <= muddat; i++){
      console.log(i);
      if (muddat == 3) {
          foiz = 0.17;
      }
      else if (muddat == 6) {
          foiz = 0.24;
      }
      else { (foiz = 0.30).toFixed(0);}
    let a = ((+miqdor + foiz * miqdor) / muddat).toFixed(0),
        b = ((+miqdor + foiz * miqdor) / muddat).toFixed(0) * (muddat - i);
    malumot.innerHTML += `
        <tr>
            <td>${i} oy</td>
            <td>${(+miqdor + foiz * miqdor)}</td>
            <td>${a}</td>
            <td>${b}</td>
        </tr>
    `;
    document.querySelector("#foiz").value = foiz * 100;
    
  }
    miqdor = document.querySelector("#qarz").value = '';
});