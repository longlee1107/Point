let testScore = {
    name: "",
    math: 0,
    literature: 0,
    english: 0,
};
//gọi giá trị sau khi nhập
var stt = 0;

function nhap() {
    stt += 1;
    debugger
    var name = document.getElementById("name").value;
    var math = document.getElementById("math").value;
    var literature = document.getElementById("literature").value;
    var english = document.getElementById("english").value;
    testScore.name = name;
    testScore.math = math;
    testScore.literature = literature;
    testScore.english = english;
    //Điều kiện: không có chuỗi rông và giá trị nằm trong khoảng 0-10
    if (name == "" || math == "" || literature == "" || english == "") {
        alert("Trường còn trống");
        return;
    } else if (math < 0 || math > 10 || literature < 0 || literature > 10 || english < 0 || english > 10) {
        alert("giá trị trong khoảng 0-10");
        return;
    }
    //in thông tin người dùng vào bảng
    var table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = stt;
    cell2.innerHTML = name;
    cell3.innerHTML = math;
    cell4.innerHTML = literature;
    cell5.innerHTML = english
    cell6.innerHTML = "?";
    document.getElementById("name").value = "";
    document.getElementById("math").value = "";
    document.getElementById("literature").value = "";
    document.getElementById("english").value = "";
}
//tính điểm trung bình
function dtb() {
    var table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
    for (var i = 0; i < table.rows.length; i++) {
        var sumRow = 0;
        var tbcRow = 0;
        sumRow = parseInt(table.rows[i].cells[2].innerHTML) + parseInt(table.rows[i].cells[3].innerHTML) +
            parseInt(table.rows[i].cells[4].innerHTML);
        tbcRow = (sumRow / 3).toFixed(1);
        table.rows[i].cells[5].innerHTML = tbcRow;
    }
}
//xác định hs giỏi có dtb >=8
function hsgioi() {
    var table = document.getElementById("mytable").getElementsByTagName("tbody")[0];
    for (var i = 0; i < table.rows.length; i++) {
        var tbcRow = table.rows[i].cells[5].innerHTML;
        if (tbcRow >= 8) {
            table.rows[i].style.color = "red";
        }
    }
}