function login_logic(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    r_username = "durga";
    r_password = "durga@888";


    if(username===r_username && password===r_password){
        window.location.href ="welcome.html";
    }else{
        window.location.href ="error.html"
    }


}