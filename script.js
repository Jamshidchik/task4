alert(" Izzatulloh aka shunday maqol bor:  Uyqingiz kelmasa,kitoblarni o'qing!!!")
let book = +prompt("O'qilgan kitob sonini kiriting")
while(isNaN(book) || book == 0){
    book = +prompt("Xatolik bor, qaytadan urinib ko'r ")
}

let num = 0
for (let i = 1; i <= book; i++) {
    num++
    console.log(num + ' ' + "O'qilgan kitoblar");
}
 alert("O'qilgan kitoblar  " + book + " ta")
 alert("Tashakkur o'qishda davom eting.")
