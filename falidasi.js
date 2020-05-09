function waktu () {
    var x = document.getElementById("exampleInputEmail1").value;
    var y = document.getElementById("exampleInputPassword1").value;
    var z = document.getElementById("exampleCheck1").checked;

    if (x =="" && y =="" && z == null){
        alert ("salah");
        return false;
    }
    else if(x ==""){
        alert ("Email Kosong");
        return true;
    }
    else if(y ==""){
        alert ("Password Kosong");
        return true;
    }
}
