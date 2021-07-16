function validate() {

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="admin" && password=="123") {
        alert("Login Successfull");
        window.location.replace("homepage.html");
        return false;
    }
    else {
        alert("Login failed");
    }

}