function waktu() {
    var x = document.getElementById("exampleInputEmail1").value;
    var y = document.getElementById("exampleInputPassword1").value;
    var z = document.getElementById("exampleCheck1").checked;
    if (x == "" && y == "" && z == false) {
        alert("Periksa Kembali");
        return false;
    } else if (x == "" && y == "" && z == true) {
        alert("Error");
        return false;
    } else if (x != "" && y != "" && z == false) {
        alert("Silahkan Check");
        return false;
    } else if (x != "" && y == "" && z == true) {
        alert("Periksa password");
        return false;
    } else if (x == "" && y != "" && z == true) {
        alert("Periksa Email");
        return false;
    } else {
        alert("Welcome");
        return false;
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
    //console.log(bahasa[bahasa.selectedIndex].value);
    alert(bahasa[bahasa.selectedIndex].text);
}

//properti objek
var User = {
    nama: "flandy",
    kelas: 3,
    id: 1234567,
    fullName: function () {
        return this.nama.indexOf("l");
    }
};
//document.getElementById("text").innerHTML = User.fullName();