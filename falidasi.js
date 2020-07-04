function waktu() {
    var x = document.getElementById("exampleInputEmail1").value;
    var y = document.getElementById("exampleInputPassword1").value;
    var z = document.getElementById("exampleCheck1").checked;

    if (x == "" && y == "" && z == null) {
        alert("salah");
        return false;
    } else if (x == "") {
        alert("Email Kosong");
        return true;
    } else if (y == "") {
        alert("Password Kosong");
        return true;
    }
}
document.getElementById("hallo").addEventListener("click", apa);

function apa() {
    document.getElementById("hallo").innerHTML = "What The hell";
    document.getElementById("hallo"), ondblclick = function () {
        document.getElementById("hallo").innerHTML = "Hallo Welcome In My Website";
    }
}

//membuat option value
var bahasa = document.getElementById("bahasa");
document.getElementById("Submit-Bahasa").onclick = function () {
 alert(bahasa[bahasa.selectedIndex].value);
}